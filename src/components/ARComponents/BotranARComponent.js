import React from 'react';

import {
  ViroAmbientLight,
  ViroAnimations,
  ViroARImageMarker,
  ViroARScene,
  ViroARTrackingTargets,
  ViroNode,
} from '@viro-community/react-viro';

import ARMakeObject from './ARMakeObject';

const No12EtiquetaSimple = require('./../../../assets/images/botellas/marcadores/BOTRAN-No12EtiquetaSimple.png');
const No12EtiquetaNormal = require('./../../../assets/images/botellas/marcadores/BOTRAN-No12EtiquetaNormal.png');
const No12EtiquetaLuz = require('./../../../assets/images/botellas/marcadores/BOTRAN-No12EtiquetaLuz.png');
const No12EtiquetaSombra = require('./../../../assets/images/botellas/marcadores/BOTRAN-No12EtiquetaSombra.png');

const No12Etiqueta = [No12EtiquetaSimple, No12EtiquetaNormal, No12EtiquetaLuz, No12EtiquetaSombra];

const No15EtiquetaSimple = require('./../../../assets/images/botellas/marcadores/BOTRAN-No15EtiquetaSimple.png');
const No15EtiquetaNormal = require('./../../../assets/images/botellas/marcadores/BOTRAN-No15EtiquetaNormal.png');
const No15EtiquetaLuz = require('./../../../assets/images/botellas/marcadores/BOTRAN-No15EtiquetaLuz.png');
const No15EtiquetaSombra = require('./../../../assets/images/botellas/marcadores/BOTRAN-No15EtiquetaSombra.png');

const No15Etiqueta = [No15EtiquetaSimple, No15EtiquetaNormal, No15EtiquetaLuz, No15EtiquetaSombra];

const No18EtiquetaSimple = require('./../../../assets/images/botellas/marcadores/BOTRAN-No18EtiquetaSimple.png');
const No18EtiquetaNormal = require('./../../../assets/images/botellas/marcadores/BOTRAN-No18EtiquetaNormal.png');
const No18EtiquetaLuz = require('./../../../assets/images/botellas/marcadores/BOTRAN-No18EtiquetaLuz.png');
const No18EtiquetaSombra = require('./../../../assets/images/botellas/marcadores/BOTRAN-No18EtiquetaSombra.png');

const No18Etiqueta = [No18EtiquetaSimple, No18EtiquetaNormal, No18EtiquetaLuz, No18EtiquetaSombra];

export default function BotranARComponent(props) {
  const {
    show32D,
    selected,
    playAnim,
    targets,
    style,
    _changeObject,
    show3D,
    _onAnchorFound,
    _onAnchorUpdate,
    _onCameraTransformUpdate,
    isTracking,
    column,
    objIndex,
    pauseUpdates,
    _target,
  } = props.sceneNavigator.viroAppProps;

  const renderScene = nowTracking =>
    targets.map(target => (
      <ViroNode position={[0, 0, 0]} key={`${target}cardmain`}>
        <ViroARImageMarker
          key={`${target}MKt`}
          target={target}
          // onAnchorFound={anchor => {
          //   _onAnchorFound(anchor);
          // }}
          onAnchorUpdated={anchor => {
            _onAnchorUpdate(anchor, target);
          }}
        >
          <ViroNode key={`${target}card`}>
            <ViroNode rotation={[-90, 0, 0]} key={`${target}cardnode`}>
              <ViroAmbientLight color="#f0f0f0" intensity={400} />
              {nowTracking && (
                <ARMakeObject
                  {...props}
                  _key={target}
                  _target={_target}
                  style={style}
                  _changeObject={_changeObject}
                  playAnim={playAnim}
                  show3D={show3D}
                  show32D={show32D}
                  selected={selected}
                  column={column}
                  objIndex={objIndex}
                />
              )}
            </ViroNode>
          </ViroNode>
        </ViroARImageMarker>
      </ViroNode>
    ));

  return (
    <ViroARScene
      // onTrackingUpdated={anchor => {
      //   _onAnchorUpdate(anchor);
      // }}
      pauseUpdates={pauseUpdates}
    >
      {renderScene(isTracking)}
    </ViroARScene>
  );
}
ViroARTrackingTargets.createTargets({
  Botran12: {
    source: No12Etiqueta[0],
    orientation: 'Up',
    physicalWidth: 0.150, // real world width in meters
  },
  Botran12Normal: {
    source: No12Etiqueta[1],
    orientation: 'Up',
    physicalWidth: 0.150, // real world width in meters
  },
  Botran12Sombra: {
    source: No12Etiqueta[2],
    orientation: 'Up',
    physicalWidth: 0.150, // real world width in meters
  },
  Botran12Luz: {
    source: No12Etiqueta[3],
    orientation: 'Up',
    physicalWidth: 0.150, // real world width in meters
  },
  Botran15: {
    source: No15Etiqueta[0],
    orientation: 'Up',
    physicalWidth: 0.170, // real world width in meters
  },
  Botran15Normal: {
    source: No15Etiqueta[1],
    orientation: 'Up',
    physicalWidth: 0.170, // real world width in meters
  },
  Botran15Sombra: {
    source: No15Etiqueta[2],
    orientation: 'Up',
    physicalWidth: 0.170, // real world width in meters
  },
  Botran15Luz: {
    source: No15Etiqueta[3],
    orientation: 'Up',
    physicalWidth: 0.170, // real world width in meters
  },
  Botran18: {
    source: No18Etiqueta[0],
    orientation: 'Up',
    physicalWidth: 0.190, // real world width in meters
  },
  Botran18Normal: {
    source: No18Etiqueta[1],
    orientation: 'Up',
    physicalWidth: 0.190, // real world width in meters
  },
  Botran18Sombra: {
    source: No18Etiqueta[2],
    orientation: 'Up',
    physicalWidth: 0.190, // real world width in meters
  },
  Botran18Luz: {
    source: No18Etiqueta[3],
    orientation: 'Up',
    physicalWidth: 0.190, // real world width in meters
  },
});

ViroAnimations.registerAnimations({
  scaleModel: {
    properties: { scaleX: 1, scaleY: 1, scaleZ: 1 },
    duration: 500,
  },
  scaleUp: {
    properties: { scaleX: 1, scaleY: 1, scaleZ: 1 },
    duration: 500,
    easing: 'bounce',
  },
  scaleDown: {
    properties: { scaleX: 0, scaleY: 0, scaleZ: 0 },
    duration: 200,
  },
  scaleSphereUp: {
    properties: { scaleX: 0.8, scaleY: 0.8, scaleZ: 0.8 },
    duration: 50,
    easing: 'easeineaseout',
  },
  scaleSphereDown: {
    properties: { scaleX: 1, scaleY: 1, scaleZ: 1 },
    duration: 50,
    easing: 'easeineaseout',
  },
  tapAnimation: [['scaleSphereUp', 'scaleSphereDown']],
  rotate: {
    properties: {
      rotateY: '+=90',
    },
    duration: 2500, // .25 seconds
  },
});
