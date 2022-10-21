/* eslint-disable eqeqeq */
import React from 'react';
import {
  StyleSheet
} from 'react-native';

import {
  Viro3DObject, ViroAmbientLight, ViroAnimations,
  ViroARCamera, ViroARImageMarker, ViroARScene, ViroARSceneNavigator, ViroARTrackingTargets, ViroBox,
  ViroMaterials, ViroNode, ViroOmniLight, ViroQuad, ViroSpotLight, Text, TouchableHighlight, ViroText, View
} from '@viro-community/react-viro';

const createReactClass = require('create-react-class');
const No12Etiqueta = require('./../../assets/images/materiales/BOTRAN-No12Etiqueta.png')
const No15Etiqueta = require('./../../assets/images/materiales/BOTRAN-No15-Etiqueta.png')
const No18Etiqueta = require('./../../assets/images/materiales/BOTRAN-No18-Etiqueta.png')

state = {
  initialized: false,
};

const _onLoadStart = (event) => {
  console.log("loading has started", event.nativeEvent);
};

const _onLoadEnd = (event) => {
  console.log("loading has finished", event.nativeEvent);
};

const _onError = (event) => {
  console.log("Error cargando el modelo", event.nativeEvent);
};
ViroMaterials.createMaterials({
  white_sphere: {
    lightingModel: "PBR",
    diffuseColor: "rgb(231,231,231)",
  },
  blue_sphere: {
    lightingModel: "PBR",
    diffuseColor: "rgb(19,42,143)",
  },
  grey_sphere: {
    lightingModel: "PBR",
    diffuseColor: "rgb(75,76,79)",
  },
  red_sphere: {
    lightingModel: "PBR",
    diffuseColor: "rgb(168,0,0)",
  },
  yellow_sphere: {
    lightingModel: "PBR",
    diffuseColor: "rgb(200,142,31)",
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

ViroAnimations.registerAnimations({
  rotate: {
    properties: {
      rotateY: "+=90"
    },
    duration: 2500, // .25 seconds
  },
});
const MakeObject = (props) => {
  const prueba12AFlaten = {
    src: require("./../../assets/images/materiales/01-MODULOS-Intro_Completa-FLATTEN-12a.vrx"),
    materials: [
      require('./../../assets/images/materiales/BOTRAN-No12EtiquetaLOW.png'),
      require('./../../assets/images/materiales/Col0-INTRO_Uvmap.png'),
      require('./../../assets/images/materiales/Col0-Zoom-Mapa_Uvmap.png'),
      require('./../../assets/images/materiales/LANDING_0002_MIXCO-MAP.png'),
      require('./../../assets/images/materiales/LANDING_0004_REU-MAP.png'),
      require('./../../assets/images/materiales/LANDING_0006_XELA-MAP.png'),
      require('./../../assets/images/materiales/ZOOM_Fondo.jpg'),
    ]
  }
  const prueba12CFlaten = {
    src: require("./../../assets/images/materiales/01-MODULOS-Intro_Completa-FLATTEN-12c.vrx"),
    materials: [
      require('./../../assets/images/materiales/BOTRAN-No12EtiquetaLOW.png'),
      require('./../../assets/images/materiales/Col0-INTRO_Uvmap.png'),
      require('./../../assets/images/materiales/Col0-Zoom-Mapa_Uvmap.png'),
      require('./../../assets/images/materiales/LANDING_0002_MIXCO-MAP.png'),
      require('./../../assets/images/materiales/LANDING_0004_REU-MAP.png'),
      require('./../../assets/images/materiales/LANDING_0006_XELA-MAP.png'),
      require('./../../assets/images/materiales/ZOOM_Fondo.jpg'),
    ]
  }
  const prueba12A = {
    src: require("./../../assets/images/materiales/01-MODULOS-Col3_FLATTEN-12a.vrx"),
    materials: [
      require('./../../assets/images/materiales/BOTRAN-No12Etiqueta3.png'),
      require('./../../assets/images/materiales/Col3-AroundTheWorld_Uvmap.png'),
      require('./../../assets/images/materiales/Col3-Distribucion_Uvmap.png'),
      require('./../../assets/images/materiales/Col3-Embotellado_Uvmap.png'),
    ]
  }
  const prueba6 = {
    src: require("./../../assets/images/materiales/COL3-12-TEST-Nothing-Emb-06.vrx"),
    materials: [
      require('./../../assets/images/materiales/BOTRAN-No12Etiqueta3.png'),
      require('./../../assets/images/materiales/Col3-AroundTheWorld_Uvmap.png'),
      require('./../../assets/images/materiales/Col3-Distribucion_Uvmap.png'),
      require('./../../assets/images/materiales/Col3-Embotellado_Uvmap.png'),
    ]
  }

  const football = {
    src: require("./../../assets/images/materiales/object_soccer_ball.vrx"),
    materials: [
      require('./../../assets/images/materiales/object_soccer_ball_diffuse.png'),
      require('./../../assets/images/materiales/object_soccer_ball_normal.png'),
      require('./../../assets/images/materiales/object_soccer_ball_specular.png'),
    ],
    scale: [.9, .9, .9]
  }

  const objects = [
    prueba12AFlaten,
    prueba12CFlaten,
    prueba12A,
    prueba6,
    football
  ]
  const contador = props.objIndex || 0;
  const selected = objects[contador];
  const positions = props.foundAnchor?.position.map((pos, i) => {
    if (i == 0) {
      return pos * 1;
    }
    if (i == 1) {
      return pos * -10000;
    }
    return pos * 400;
  })
  const scale = props.foundAnchor?.scale.map((pos, i) => {
    if (i == 0) {
      return pos / 2;
    }
    if (i == 1) {
      return pos / 2.1;
    }
    return pos / 2;
  })
  console.log(scale)
  return (
    <>
      <SpotLigth />
      <Viro3DObject
        key={`${props.key}Obj`}
        source={selected.src}
        position={positions || [1, -40, -100]}
        scale={scale || (selected.scale || [.4, .4, .4])}
        rotation={[5, 0, 0]}
        lightReceivingBitMask={5}
        animation={{ name: props.animationName, run: props.playAnim, loop: props.loopState, onFinish: props._onFinish, }}
        shadowCastingBitMask={4}
        type="VRX"
        dragType="FixedToWorld"
        resources={selected.materials}
        onLoadStart={props._onLoadStart}
        onLoadEnd={props._onLoadEnd}
        onError={props._onError}
      />
      <ViroQuad
        rotation={[-90, 0, 0]}
        key={`${props.key}Quad`}
        width={250}
        height={250}
        arShadowReceiver
        lightReceivingBitMask={4}
      />
    </>
  );
}
const SpotLigth = (props) => (
  <>
    <ViroSpotLight
      innerAngle={5}
      key={props.key}
      outerAngle={45}
      direction={[0, 0, 0]}
      position={[0, 0, 0]}
      color="#ffffff"
      castsShadow
      influenceBitMask={4}
      shadowMapSize={1024}
      shadowNearZ={2}
      shadowFarZ={5}
      shadowOpacity={.7}
    />
  </>
)

// eslint-disable-next-line react/prefer-es6-class
const Escena3D = createReactClass({
  getInitialState() {
    return {
      pauseUpdates: false,
      playAnim: false,
      objIndex: 2,
      targets: ['Botran12'],
      texture: "white",
      animationName: '02',
      foundAnchor: null,
      anchorId: null,
      show3D: false,
      tapWhite: false,
      tapBlue: false,
      tapGrey: false,
      tapRed: false,
      tapYellow: false,
    };
  },
  getNoTrackingUI() {
    const { isTracking, initialized } = this.state;
    return (
      <ViroText text={
        initialized ? 'Initializing AR...'
          : "No Tracking"
      }
      />
    )
  },
  _onFinish() {
    this.setState({
      playAnim: false,
      pauseUpdates: true,
    })
  },
  _toggleButtons() {
    const animeName = this.state.animName;
    this.setState({
      animName: (animeName == "scaleUp" ? "scaleDown" : "scaleUp"),
      playAnim: true
    })
  },
  _onTapped() {
    const animate = this.state.playAnim;
    const { objIndex } = this.state;
    console.log('prueba')
    this.setState({
      playAnim: !animate,
      objIndex: objIndex == 0 ? 1 : 0,
    })
  },
  _selectWhite() {
    this.setState({
      texture: "white",
      tapWhite: true
    })
  },
  _selectBlue() {
    this.setState({
      texture: "blue",
      tapBlue: true
    })
  },
  _selectGrey() {
    this.setState({
      texture: "grey",
      tapGrey: true
    })
  },
  _selectRed() {
    this.setState({
      texture: "red",
      tapRed: true
    })
  },
  _selectYellow() {
    this.setState({
      texture: "yellow",
      tapYellow: true
    })
  },
  _animateFinished() {
    this.setState({
      tapWhite: false,
      tapBlue: false,
      tapGrey: false,
      tapRed: false,
      tapYellow: false,
    })
  },
  _onAnchorFound(anchor) {
    console.log('ANCHOR********:', anchor)
    this.setState({
      pauseUpdates: false,
      playAnim: true,
      foundAnchor: anchor,
      anchorId: anchor.anchorId
    })
  },
  _onAnchorUpdate(anchor) {
    console.log('ANCHORUPDATE********:', anchor)
    const { anchorId } = this.state;
    this.setState({
      pauseUpdates: true,
      playAnim: true,
      foundAnchor: anchor,
      anchorId: anchorId != anchor.anchorId ? anchor.anchorId : anchorId
    })
  },
  _onModelLoad() {
    setTimeout(() => {
      this.setState({

      })
    }, 3000);
  },
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
                position={[0, -.1, 0]}
                key={`${target}Node`}
                scale={[0, 0, 0]}
                rotation={[-90, 0, 0]}
                dragType="FixedToWorld"
                onClick={this._onTapped}
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
                    position={[0, 0, 0]}
                  />
                  <MakeObject {...this.state} />
                </ViroARCamera>
              </ViroNode>
            )}
          </ViroARImageMarker>
        ))
        }
        <ViroOmniLight
          intensity={300}
          position={[-10, 10, 1]}
          color="#FFFFFF"
          attenuationStartDistance={20}
          attenuationEndDistance={30}
        />

        <ViroOmniLight
          intensity={300}
          position={[10, 10, 1]}
          color="#FFFFFF"
          attenuationStartDistance={20}
          attenuationEndDistance={30}
        />

        <ViroOmniLight
          intensity={300}
          position={[-10, -10, 1]}
          color="#FFFFFF"
          attenuationStartDistance={20}
          attenuationEndDistance={30}
        />

        <ViroOmniLight
          intensity={300}
          position={[10, -10, 1]}
          color="#FFFFFF"
          attenuationStartDistance={20}
          attenuationEndDistance={30}
        />

        <ViroSpotLight
          position={[0, 8, -2]}
          color="#ffffff"
          direction={[0, -1, 0]}
          intensity={50}
          attenuationStartDistance={5}
          attenuationEndDistance={10}
          innerAngle={5}
          outerAngle={20}
          castsShadow
        />

        <ViroQuad
          rotation={[-90, 0, 0]}
          position={[0, -1.6, 0]}
          width={5}
          height={5}
          arShadowReceiver
        />

      </ViroARScene>
    );
  },
});
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
  scaleCar: {
    properties: { scaleX: .09, scaleY: .09, scaleZ: .09, },
    duration: 500, easing: "bounce"
  },
  scaleSphereUp: {
    properties: { scaleX: .8, scaleY: .8, scaleZ: .8, },
    duration: 50, easing: "easeineaseout"
  },
  scaleSphereDown: {
    properties: { scaleX: 1, scaleY: 1, scaleZ: 1, },
    duration: 50, easing: "easeineaseout"
  },
  tapAnimation: [["scaleSphereUp", "scaleSphereDown"],]
});
export default function D3Components() {
  return (
    <>
      <ViroAmbientLight color="#ffffff" intensity={1000} />
      <ViroARSceneNavigator
        autofocus
        initialScene={{
          scene: Escena3D,
        }}
        style={styles.f1}
      />
    </>
  )
}