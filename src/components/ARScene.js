import React from 'react';
import {
  StyleSheet
} from 'react-native';

import {
  ViroAmbientLight, ViroARSceneNavigator
} from '@viro-community/react-viro';

import BotranARComponent from './ARComponents/BotranARComponent';

const styles = StyleSheet.create({
  f1: { flex: 1 },
});

export default function ARScene(props) {
  return (
    <>
      <ViroAmbientLight color="#ffffff" intensity={1000} />
      <ViroARSceneNavigator
        autofocus
        numberOfTrackedImages={1}
        initialScene={{
          // scene: ARCarDemo,
          scene: props.component || BotranARComponent,
          passProps:{...props}
        }}
        viroAppProps={{...props, show32D: props.show32D, selected: props.selected, playAnim: props.playAnim, pauseUpdates: props.pauseUpdates, foundAnchor: props.foundAncho, isTracking: props.isTracking, column: props.column, objIndex: props.objIndex, show3D: props.show3D}}
        style={{flex: 1}}
      />
    </>
  )
}