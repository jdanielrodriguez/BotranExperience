/* eslint-disable eqeqeq */
import React from 'react';
import {
  StyleSheet
} from 'react-native';

import {
  Viro3DObject, ViroAmbientLight, ViroAnimations,
  ViroARCamera, ViroARImageMarker, ViroARScene, ViroARSceneNavigator, ViroARTrackingTargets,
  ViroMaterials, ViroNode, ViroOmniLight, ViroQuad, ViroSpotLight, ViroTrackingStateConstants
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
    scale: [.9,.9,.9]
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

  return (
    <>
      {spotLigth()}
      <Viro3DObject
        source={selected.src}
        position={[0, -50, -100]}
        scale={selected.scale || [.4, .4, .4]}
        rotation={[0, 0, -2]}
        lightReceivingBitMask={5}
        animation={{ name: props.animationName, run: props.modelAnim, loop: props.loopState, onFinish: props._onFinish, }}
        shadowCastingBitMask={4}
        type="VRX"
        resources={selected.materials}
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
  );
}
const spotLigth = () => (
  <>
    <ViroSpotLight
      innerAngle={5}
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
const ARPosterDemo = createReactClass({
  getInitialState() {
    return {
      pauseUpdates: false,
      playAnim: false,
      objIndex: 1,
    };
  },

  _onFinish() {
    this.setState({
      playAnim: false,
      pauseUpdates: true,
    })
  },

  _onAnchorFound() {
    this.setState({
      pauseUpdates: false,
      playAnim: true,
    })
  },

  _onAnchorUpdate() {
    this.setState({
      pauseUpdates: true,
      playAnim: true,
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
        <ViroAmbientLight color="#ffffff" intensity={1000} />
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
            <MakeObject {...this.state} />
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
});
ViroARTrackingTargets.createTargets({
  Botran12: {
    source: No12Etiqueta,
    orientation: "Up",
    physicalWidth: 0.082 // real world width in meters
  },
  Botran15: {
    source: No12Etiqueta,
    orientation: "Up",
    physicalWidth: 0.082 // real world width in meters
  },
  Botran18: {
    source: No12Etiqueta,
    orientation: "Up",
    physicalWidth: 0.082 // real world width in meters
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