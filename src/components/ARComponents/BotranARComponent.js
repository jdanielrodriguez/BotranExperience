import React from 'react';

import {
   ViroAmbientLight, ViroAnimations, ViroARImageMarker,
   ViroARScene, ViroARTrackingTargets, ViroARCamera, ViroARPlane
} from '@viro-community/react-viro';

import ARMakeObject from './ARMakeObject';
import { OmniLigth } from './ARSpotLigth';

const No12Etiqueta = require('./../../../assets/images/materiales/BOTRAN-No12Etiqueta.jpg')
const No15Etiqueta = require('./../../../assets/images/materiales/BOTRAN-No15-Etiqueta.png')
const No18Etiqueta = require('./../../../assets/images/materiales/BOTRAN-No18-Etiqueta.png')

export default function BotranARComponent(props) {
   const { show32D, selected, playAnim, pauseUpdates, targets, style, _changeObject, show3D, _onAnchorFound, _onAnchorUpdate, _onAnchorLost } = props.sceneNavigator.viroAppProps;
   return (
     <ViroARScene
       onAnchorFound={(anchor) => { _onAnchorFound(anchor) }}
       onTrackingUpdated={(anchor) => { _onAnchorUpdate(anchor) }}
       onAnchorRemoved={(anchor) => { _onAnchorLost(anchor) }}
     >
       {show3D && targets.map((target) => (
         <ViroARImageMarker
           key={`${target}MKt`}
           target={target}
           pauseUpdates={pauseUpdates}
         >
           <ViroARCamera
             position={[0, 150, 220]}
             rotation={[0, 0, 0]}
             active
           />
           <ViroAmbientLight color="#f0f0f0" intensity={1000} />
           <ARMakeObject {...props} style={style} _changeObject={_changeObject} playAnim={playAnim} show3D={show3D} show32D={show32D} selected={selected} />
         </ViroARImageMarker>
         ))
         }
       <OmniLigth />
     </ViroARScene>
   );
}
ViroARTrackingTargets.createTargets({
   Botran12: {
      source: No12Etiqueta,
      orientation: "Up",
      physicalWidth: 0.100 // real world width in meters
   },
   Botran15: {
      source: No15Etiqueta,
      orientation: "Up",
      physicalWidth: 0.100 // real world width in meters
   },
   Botran18: {
      source: No18Etiqueta,
      orientation: "Up",
      physicalWidth: 0.100 // real world width in meters
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
