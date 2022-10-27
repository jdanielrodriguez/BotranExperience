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
        initialScene={{
          scene: BotranARComponent,
          passProps:{...props}
        }}
        style={styles.f1}
      />
    </>
  )
}