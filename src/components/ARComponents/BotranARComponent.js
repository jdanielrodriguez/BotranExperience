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

const No12Etiqueta = require('./../../../assets/images/materiales/BOTRAN-No12Etiqueta.png');
const No15Etiqueta = require('./../../../assets/images/materiales/BOTRAN-No15-Etiqueta.png');
const No18Etiqueta = require('./../../../assets/images/materiales/BOTRAN-No18-Etiqueta.png');

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
  } = props.sceneNavigator.viroAppProps;

  const renderScene = nowTracking =>
    targets.map(target => (
      <ViroNode position={[0, 0, 0]} key={`${target}cardmain`}>
        <ViroARImageMarker
          key={`${target}MKt`}
          target={target}
          onAnchorFound={anchor => {
            _onAnchorFound(anchor);
          }}
          // _onAnchorUpdate={(anchor) => { _onAnchorUpdate(anchor) }}
        >
          <ViroNode key={`${target}card`}>
            <ViroNode rotation={[-90, 0, 0]} key={`${target}cardnode`}>
              <ViroAmbientLight color="#f0f0f0" intensity={1000} />
              {nowTracking && (
                <ARMakeObject
                  {...props}
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
      onAnchorUpdated={anchor => {
        _onAnchorUpdate(anchor);
      }}
      pauseUpdates={pauseUpdates}
    >
      {renderScene(isTracking)}
    </ViroARScene>
  );
}
ViroARTrackingTargets.createTargets({
  Botran12: {
    source: No12Etiqueta,
    orientation: 'Up',
    physicalWidth: 0.085, // real world width in meters
  },
  Botran15: {
    source: No15Etiqueta,
    orientation: 'Up',
    physicalWidth: 0.075, // real world width in meters
  },
  Botran18: {
    source: No18Etiqueta,
    orientation: 'Up',
    physicalWidth: 0.105, // real world width in meters
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
