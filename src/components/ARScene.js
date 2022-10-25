import React from 'react';
import {
  StyleSheet
} from 'react-native';

import {
  ViroAmbientLight, ViroAnimations, ViroARCamera, ViroARImageMarker,
  ViroARScene, ViroARSceneNavigator, ViroARTrackingTargets, ViroBox, ViroNode
} from '@viro-community/react-viro';

import ARButtons from './ARComponents/ARButtons';
import ARMakeObject from './ARComponents/ARMakeObject';
import ARObjects from './ARComponents/ARObjects';
import { OmniLigth } from './ARComponents/ARSpotLigth';

const No12Etiqueta = require('./../../assets/images/materiales/BOTRAN-No12Etiqueta.png')
const No15Etiqueta = require('./../../assets/images/materiales/BOTRAN-No15-Etiqueta.png')
const No18Etiqueta = require('./../../assets/images/materiales/BOTRAN-No18-Etiqueta.png')

class BotranExperience extends React.Component {
  constructor(props) {
    super(props);

    const objects = ARObjects();
    const index = 0;
    const column = 0;
    // Set up initial state
    this.state = {
      pauseUpdates: false,
      playAnim: false,
      objIndex: index,
      column,
      targets: ['Botran12'],
      animationName: '02',
      foundAnchor: null,
      anchorId: null,
      show3D: false,
      selected: objects[column][index],
      objects
    };

    // Functions must be bound manually with ES6 classes
    this._onFinish = this._onFinish.bind(this);
    this._toggleButtons = this._toggleButtons.bind(this);
    this._changeObject = this._changeObject.bind(this);
    this._changeColumn = this._changeColumn.bind(this);
    this._onAnchorFound = this._onAnchorFound.bind(this);
    this._onAnchorUpdate = this._onAnchorUpdate.bind(this);

  }

  _onFinish() {
    this.setState({
      playAnim: false,
      pauseUpdates: true,
    })
  }

  _toggleButtons() {
    const animeName = this.state.animName;
    this.setState({
      animName: (animeName === "scaleUp" ? "scaleDown" : "scaleUp"),
      playAnim: true
    })
  }

  _changeObject() {
    const animate = this.state.playAnim;
    const { objIndex, objects, column } = this.state;
    let index = objIndex < objects[column].length ? objIndex + 1 : 0
    let currentColumn = column
    if (!objects[column][index]) {
      index = 0;
      currentColumn = 0;
    }
    const selected = objects[column][index]
    this.setState({
      playAnim: !animate,
      objIndex: index,
      selected,
      column: currentColumn
    })
  }

  _changeColumn(columnNew) {
    const animate = this.state.playAnim;
    const { objects } = this.state;
    let currentColumn = columnNew <= objects.length ? columnNew : 0
    let index = 0;
    if (!objects[currentColumn]) {
      currentColumn = 0;
    }

    if (!objects[currentColumn][index]) {
      index = 0;
    }
    const selected = objects[currentColumn][index]
    this.setState({
      playAnim: !animate,
      objIndex: index,
      selected,
      column: currentColumn
    })
  }

  _onAnchorFound(anchor) {
    console.log('ANCHOR********:', anchor)
    this.setState({
      pauseUpdates: false,
      playAnim: true,
      foundAnchor: anchor,
      anchorId: anchor.anchorId
    })
  }

  _onAnchorUpdate(anchor) {
    console.log('ANCHORUPDATE********:', anchor)
    const { anchorId } = this.state;
    this.setState({
      pauseUpdates: true,
      playAnim: true,
      foundAnchor: anchor,
      anchorId: anchorId !== anchor.anchorId ? anchor.anchorId : anchorId
    })
  }

  render() {
    return (
      <ViroARScene>
        {this.state.targets.map((target) => (
          <ViroARImageMarker
            key={`${target}MKt`}
            target={target}
            onAnchorFound={this._onAnchorFound}
            onAnchorUpdate={this._onAnchorUpdate}
            pauseUpdates={this.state.pauseUpdates}
          >
            {this.state.foundAnchor?.trackingMethod === 'tracking' && (
              <ViroNode
                position={[1, -40, -100]}
                key={`${target}Node`}
                scale={[1, 1, 1]}
                rotation={[-90, 0, 0]}
                dragType="FixedToWorld"
                onClick={this._changeObject}
                animation={{ name: "scaleModel", run: this.state.playAnim, }}
              >
                <ViroAmbientLight color="#f0f0f0" intensity={1000} />
                <ViroARCamera
                  position={[0, 0, 0]}
                  rotation={[0, 0, 0]}
                  active
                >
                  <ViroBox
                    key={`${target}box`}
                    position={[1, -40, -100]}
                  />
                  <ARMakeObject {...this.state} />
                  <ARButtons _changeColumn={this._changeColumn} {...this.state} />
                </ViroARCamera>
              </ViroNode>
            )}
          </ViroARImageMarker>
        ))
        }
        <OmniLigth />
      </ViroARScene>
    );
  }
};
ViroARTrackingTargets.createTargets({
  Botran12: {
    source: No12Etiqueta,
    orientation: "Up",
    physicalWidth: 0.125 // real world width in meters
  },
  Botran15: {
    source: No15Etiqueta,
    orientation: "Up",
    physicalWidth: 0.125 // real world width in meters
  },
  Botran18: {
    source: No18Etiqueta,
    orientation: "Up",
    physicalWidth: 0.125 // real world width in meters
  }
});

ViroAnimations.registerAnimations({
  scaleModel: {
    properties: { scaleX: 1, scaleY: 1, scaleZ: 1, },
    duration: 500
  },
  scaleUp: {
    properties: { scaleX: 1, scaleY: 1, scaleZ: 1, },
    duration: 500, easing: "bounce"
  },
  scaleDown: {
    properties: { scaleX: 0, scaleY: 0, scaleZ: 0, },
    duration: 200,
  },
  scaleSphereUp: {
    properties: { scaleX: .8, scaleY: .8, scaleZ: .8, },
    duration: 50, easing: "easeineaseout"
  },
  scaleSphereDown: {
    properties: { scaleX: 1, scaleY: 1, scaleZ: 1, },
    duration: 50, easing: "easeineaseout"
  },
  tapAnimation: [["scaleSphereUp", "scaleSphereDown"],],
  rotate: {
    properties: {
      rotateY: "+=90"
    },
    duration: 2500, // .25 seconds
  },
});

const styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 22,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default function ARScene() {
  return (
    <>
      <ViroAmbientLight color="#ffffff" intensity={1000} />
      <ViroARSceneNavigator
        autofocus
        initialScene={{
          scene: BotranExperience,
        }}
        style={styles.f1}
      />
    </>
  )
}