/* eslint-disable eqeqeq */
import React from 'react';
import {
  StyleSheet
} from 'react-native';

import {
  Viro3DObject, ViroAmbientLight, ViroAnimations,
  ViroARCamera, ViroARImageMarker, ViroARScene, ViroARSceneNavigator, ViroARTrackingTargets, ViroBox,
  ViroMaterials, ViroNode, ViroOmniLight, ViroQuad, ViroSpotLight, ViroText,
  ViroTrackingStateConstants
} from '@viro-community/react-viro';

const createReactClass = require('create-react-class');
const No12Etiqueta = require('./../../assets/images/materiales/BOTRAN-No12Etiqueta.png')

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
  grid: {
    // diffuseTexture: require('./../../assets/images/materiales/grid_bg.jpg'),
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
const botran = () => (
  <>
    {spotLigth()}
    <Viro3DObject
      source={require("./../../assets/images/materiales/columnaA.vrx")}
      position={[-1, -50, -100]}
      scale={[.4, .4, .4]}
      rotation={[0, 0, -2]}
      lightReceivingBitMask={5}
      animation={{ name: this.state.animationName, run: this.state.modelAnim, loop: this.state.loopState, onFinish: this._onFinish, }}
      shadowCastingBitMask={4}
      type="VRX"
      resources={[
        require('./../../assets/images/materiales/MODULOS-COLUMNA_3_12-OPTIMIZADO1/BOTRAN-No12Etiqueta.png'),
        require('./../../assets/images/materiales/MODULOS-COLUMNA_3_12-OPTIMIZADO1/Col3-AroundTheWorld_Uvmap.png'),
        require('./../../assets/images/materiales/MODULOS-COLUMNA_3_12-OPTIMIZADO1/Col3-Distribucion_Uvmap.png'),
        require('./../../assets/images/materiales/MODULOS-COLUMNA_3_12-OPTIMIZADO1/Col3-Embotellado_Uvmap.png'),
      ]}
      onLoadStart={_onLoadStart}
      onLoadEnd={_onLoadEnd}
      onError={_onError}
    />
    <ViroQuad
      rotation={[-90, 0, 0]}
      width={.5}
      height={.5}
      arShadowReceiver
      lightReceivingBitMask={4}
    />
  </>
)
const spotLigth = () => (
  <>
    <ViroSpotLight
      innerAngle={5}
      outerAngle={45}
      direction={[0, -1, -.2]}
      position={[0, 3, 0]}
      color="#ffffff"
      castsShadow
      influenceBitMask={4}
      shadowMapSize={2048}
      shadowNearZ={2}
      shadowFarZ={5}
      shadowOpacity={.7}
    />
  </>
)

const football = () => (
  <>
    {spotLigth()}
    <Viro3DObject
      source={require('./../../assets/images/materiales/object_soccer_ball.vrx')}
      position={[0, -0.45, 0]}
      scale={[.9, .9, .9]}
      animation={{ name: this.state.animationName, run: this.state.modelAnim, loop: this.state.loopState, onFinish: this._onFinish, }}
      type="VRX"
      lightReceivingBitMask={5}
      shadowCastingBitMask={4}
      transformBehaviors={['billboardY']}
      resources={[require('./../../assets/images/materiales/object_soccer_ball_diffuse.png'),
      require('./../../assets/images/materiales/object_soccer_ball_normal.png'),
      require('./../../assets/images/materiales/object_soccer_ball_specular.png')]}
      onLoadStart={_onLoadStart}
      onLoadEnd={_onLoadEnd}
      onError={_onError}
    />
    <ViroQuad
      rotation={[-90, 0, 0]}
      width={.5}
      height={.5}
      arShadowReceiver
      lightReceivingBitMask={4}
    />
  </>
)

const emoji = () => (
  <>
    {spotLigth()}
    <Viro3DObject
      source={require('./../../assets/images/materiales/emoji_smile.vrx')}
      position={[0, -0.45, 0]}
      onLoadEnd={_onLoadEnd}
      scale={[.2, .2, .2]}
      animation={{ name: this.state.animationName, run: this.state.modelAnim, loop: this.state.loopState, onFinish: this._onFinish, }}
      type="VRX"
      lightReceivingBitMask={3}
      shadowCastingBitMask={2}
      transformBehaviors={['billboardY']}
      resources={[require('./../../assets/images/materiales/emoji_smile_diffuse.png'),
      require('./../../assets/images/materiales/emoji_smile_specular.png'),
      require('./../../assets/images/materiales/emoji_smile_normal.png')]}
      onLoadStart={_onLoadStart}
      onError={_onError}
    />

    <ViroQuad
      rotation={[-90, 0, 0]}
      width={.5}
      height={.5}
      arShadowReceiver
      lightReceivingBitMask={2}
    />
  </>
)

const botran12Obj = (props) => (
  <>
    <ViroARImageMarker key="Botran12Mkt" target="Botran12" onAnchorFound={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}>
      <ViroNode
        position={[0, -.1, 0]}
        scale={[0, 0, 0]}
        rotation={[-90, 0, 0]}
        dragType="FixedToWorld"
        onDrag={() => { }}
        animation={{ name: "scaleModel", run: this.state.playAnim, }}
      >
        {emoji()}
      </ViroNode>
    </ViroARImageMarker>
  </>
)
const botran15Obj = (props) => (
  <>
    <ViroARImageMarker key="Botran15Mkt" target="Botran15" onAnchorFound={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}>
      <ViroNode
        position={[0, -.1, 0]}
        scale={[0, 0, 0]}
        rotation={[-90, 0, 0]}
        dragType="FixedToWorld"
        onDrag={() => { }}
        animation={{ name: "scaleModel", run: this.state.playAnim, }}
      >
        {football()}
      </ViroNode>
    </ViroARImageMarker>
  </>
)
const botran18Obj = (props) => (
  <>
    <ViroARImageMarker key="Botran18Mkt" target="Botran18" onAnchorFound={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}>
      <ViroNode
        position={[0, -.1, 0]}
        scale={[0, 0, 0]}
        rotation={[-90, 0, 0]}
        dragType="FixedToWorld"
        onDrag={() => { }}
        animation={{ name: "scaleModel", run: this.state.playAnim, }}
      >
        {football()}
      </ViroNode>
    </ViroARImageMarker>
  </>
)
// eslint-disable-next-line react/prefer-es6-class
const ball = createReactClass({
  getInitialState() {
    return {
      hasARInitialized: false,
      text: "Initializing AR...",
    };
  },
  // eslint-disable-next-line react/sort-comp
  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onTrackingUpdated}>

        {/* Text to show whether or not the AR system has initialized yet, see ViroARScene's onTrackingInitialized */}
        <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />

        <ViroBox
          position={[0, -.5, -1]}
          animation={{ name: "rotate", run: true, loop: true }}
          scale={[.3, .3, .1]}
          materials={["grid"]}
        />

        <ViroAmbientLight color="#aaaaaa" influenceBitMask={1} />
        {spotLigth()}
        <ViroNode position={[-.5, -.5, -.5]} dragType="FixedToWorld" onDrag={() => { }}>
          {emoji()}
        </ViroNode>
        <ViroNode position={[.5, -.5, -.5]} dragType="FixedToWorld" onDrag={() => { }}>
          {football()}
        </ViroNode>

      </ViroARScene>
    );
  },
  _onTrackingUpdated(state, reason) {
    // if the state changes to "TRACKING_NORMAL" for the first time, then
    // that means the AR session has initialized!
    if (!this.state.hasARInitialized && state == ViroTrackingStateConstants.TRACKING_NORMAL) {
      this.setState({
        hasARInitialized: true,
        text: "Hello World!"
      });
    }
  }
});

// eslint-disable-next-line react/prefer-es6-class
const ARPosterDemo = createReactClass({
  getInitialState() {
    return {
      pauseUpdates: false,
      playAnim: false,
    };
  },

  render() {
    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" intensity={200} />
        <ViroARCamera
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
        />
        {/* {botran12Obj()}
        {botran15Obj()}
        {botran18Obj()} */}
        <ViroARImageMarker key="Botran12Mkt" target="Botran12" onAnchorFound={this._onAnchorFound} onAnchorRemoved={this._onAnchorUpdate} pauseUpdates={this.state.pauseUpdates}>
          <ViroNode
            position={[0, -.1, 0]}
            scale={[0, 0, 0]}
            rotation={[-90, 0, 0]}
            animation={{ name: "scaleModel", run: this.state.playAnim, }}
          >
            {botran()}
          </ViroNode>
        </ViroARImageMarker>

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

  _onFinish() {
    this.setState({
      animationName: "02",
      loopState: false,
    })
  },

  _onAnchorFound() {
    this.setState({
      pauseUpdates: false,
      playAnim: true,
      modelAnim: true,
    })
  },

  _onAnchorUpdate() {
    this.setState({
      animationName: "02",
      loopState: false,
      pauseUpdates: true,
      playAnim: true,
      modelAnim: true,
    })
    console.log('detenido')
  },

  _onModelLoad() {
    setTimeout(() => {
      this.setState({

      })
    }, 3000);
  },
});
ViroARTrackingTargets.createTargets({
  Botran12: {
    source: No12Etiqueta,
    orientation: "Up",
    physicalWidth: 0.6096 // real world width in meters
  },
  Botran15: {
    source: No12Etiqueta,
    orientation: "Up",
    physicalWidth: 0.6096 // real world width in meters
  },
  Botran18: {
    source: No12Etiqueta,
    orientation: "Up",
    physicalWidth: 0.6096 // real world width in meters
  }
});

ViroAnimations.registerAnimations({
  scaleModel: {
    properties: { scaleX: 1, scaleY: 1, scaleZ: 1, },
    duration: 500
  },
});
export default function D3Components() {
  return (
    <>
      <ViroAmbientLight color="#ffffff" intensity={200} />
      <ViroARSceneNavigator
        autofocus
        initialScene={{
          scene: ARPosterDemo,
        }}
        style={styles.f1}
      />
    </>
  )
}