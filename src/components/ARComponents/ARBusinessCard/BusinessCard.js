// import React, { Component } from 'react';

// import { StyleSheet } from 'react-native';

// import {
//   ViroAnimatedImage,
//   ViroAnimations, ViroARImageMarker, ViroARScene, ViroARTrackingTargets, ViroTrackingStateConstants, Viro3DObject, ViroImage, ViroMaterials, ViroNode, ViroText
// } from '@viro-community/react-viro';

// import ARMakeObject from '../ARMakeObject';

// export default class BusinessCard extends Component {
//   constructor(props) {
//     super(props);
//     // Don't call this.setState() here!
//     this.state = {
//       isTracking: false,
//       initialized: false,
//       playAnim: false
//     };
//     this.getNoTrackingUI = this.getNoTrackingUI.bind(this);
//     this.getARScene = this.getARScene.bind(this);
//     this._onInitialized = this._onInitialized.bind(this);
//   }

//   getNoTrackingUI() {
//     const { isTracking, initialized } = this.state;
//     return (
//       <ViroText text={
//         initialized ? 'Initializing AR...'
//           : "No Tracking"
//       }
//       />
//     )
//   }

//   getARScene() {
//     return (
//       <ViroNode>
//         <ViroARImageMarker
//           target="Botran12"
//           onAnchorFound={
//             () => this.setState({
//               playAnim: true
//             })}
//         >
//           <ViroNode key="card">
//             <ViroNode
//               opacity={1}
//               position={[0, 0, 0]}
//             >
//               {/* <Viro3DObject
//                 source={require("./../../../../assets/vrx/01-FBX-INTRO/Intro_Completa-conBotella-12-parte1.vrx")}
//                 type="VRX"
//                 position={[-200,-200,-220]}
//                 scale={[100,100,100]}
//                 resources={[
//                   require('./../../../../assets/vrx/01-FBX-INTRO/BOTRAN-No12EtiquetaLOW.png'),
//                   require('./../../../../assets/vrx/01-FBX-INTRO/casa-xela-Barriles-uvmap.png'),
//                   require('./../../../../assets/vrx/01-FBX-INTRO/casa-xela-frente-uvmap.png'),
//                   require('./../../../../assets/vrx/01-FBX-INTRO/Col0-INTRO_Uvmap.png'),
//                   require('./../../../../assets/vrx/01-FBX-INTRO/Col0-mapa-casa-reu-puerto_uvmap.png'),
//                   require('./../../../../assets/vrx/01-FBX-INTRO/Col0-mapa-casa-xela_uvmap.png'),
//                   require('./../../../../assets/vrx/01-FBX-INTRO/Col0-MAPA-XELA-Mixco_Uvmap.png'),
//                   require('./../../../../assets/vrx/01-FBX-INTRO/Col0-Zoom-Mapa_Uvmap.png'),
//                   require('./../../../../assets/vrx/01-FBX-INTRO/LANDING_0002_MIXCO-MAP.png'),
//                   require('./../../../../assets/vrx/01-FBX-INTRO/LANDING_0004_REU-MAP.png'),
//                   require('./../../../../assets/vrx/01-FBX-INTRO/LANDING_0006_XELA-MAP.png'),
//               ]}
//               /> */}
//               <Viro3DObject
//                 source={require("./../../../../assets/images/materiales/object_soccer_ball.vrx")}
//                 type="VRX"
//                 position={[0,0,0]}
//                 scale={[0.05,0.05,0.05]}
//                 resources={[
//                   require('./../../../../assets/images/materiales/object_soccer_ball_diffuse.png'),
//                   require('./../../../../assets/images/materiales/object_soccer_ball_normal.png'),
//                   require('./../../../../assets/images/materiales/object_soccer_ball_specular.png'),
//               ]}
//               />
//               {/* <Viro3DObject
//                 scale={[0.01, 0.01, 0.01]}
//                 source={require('./../ARCarDemo/res/tesla/object_car.obj')}
//                 resources={[require('./../ARCarDemo/res/tesla/object_car_main_Base_Color.png'),
//                 require('./../ARCarDemo/res/tesla/object_car_main_Metallic.png'),
//                 require('./../ARCarDemo/res/tesla/object_car_main_Roughness.png'),
//                 ]}
//                 animation={{ name: "scaleCar", run: this.state.playAnim, }}
//                 type="OBJ"
//               /> */}
//               <ViroText
//                 text="www.viromedia.com"
//                 rotation={[-90, 0, 0]}
//                 scale={[0.05, 0.05, 0.05]}
//                 style={styles.textStyle}
//               />

//             </ViroNode>
//           </ViroNode>
//         </ViroARImageMarker>
//       </ViroNode>
//     )
//   }

//   _onInitialized = (state) => {
//     console.log('state: ', state)
//     if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
//       // true
//     } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
//       // false
//     }
//   }

//   render() {
//     return (
//       <ViroARScene onTrackingUpdated={this._onInitialized}>
//         {this.state.isTracking ? this.getNoTrackingUI() : this.getARScene()}
//       </ViroARScene>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   textStyle: {
//     flex: .5,
//     fontFamily: 'Roboto',
//     fontSize: 30,
//     color: '#ffffff',
//     textAlignVertical: 'top',
//     textAlign: 'left',
//     fontWeight: 'bold',
//   },
//   card: {
//     flexDirection: 'column'
//   },
//   cardWrapper: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     padding: 0.001,
//     flex: .5
//   },
//   subText: {
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//     flex: .5
//   }
// });
// const No12Etiqueta = require('./../../../../assets/images/materiales/BOTRAN-No12Etiqueta.jpg')

// ViroARTrackingTargets.createTargets({
//   "businessCard": {
//     source: require('./res/business_card.png'),
//     orientation: "Up",
//     physicalWidth: 0.05 // real world width in meters
//   },
//   "Botran12": {
//     source: No12Etiqueta,
//     orientation: "Up",
//     physicalWidth: 0.082 // real world width in meters
//   },
// });

// ViroMaterials.createMaterials({
//   imagePlaceholder: {
//     diffuseColor: "rgba(255,255,255,1)"
//   },
//   quad: {
//     diffuseColor: "rgba(0,0,0,0.5)"
//   },
//   white: {
//     lightingModel: "PBR",
//     diffuseTexture: require('./../ARCarDemo/res/tesla/object_car_main_Base_Color.png'),
//     metalnessTexture: require('./../ARCarDemo/res/tesla/object_car_main_Metallic.png'),
//     roughnessTexture: require('./../ARCarDemo/res/tesla/object_car_main_Roughness.png'),
//   },
// });

// ViroAnimations.registerAnimations({
//   animateImage: {
//     properties: {
//       positionX: 0.05,
//       opacity: 1.0
//     },
//     easing: "Bounce",
//     duration: 500
//   },
//   animateViro: {
//     properties: {
//       positionZ: 0.02,
//       opacity: 1.0,
//     },
//     easing: "Bounce",
//     duration: 500
//   },
//   scaleCar: {
//     properties: { scaleX: .02, scaleY: .02, scaleZ: .02, },
//     duration: 500, easing: "bounce"
//   },
// });

// module.exports = BusinessCard;
