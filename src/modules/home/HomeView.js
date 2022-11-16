import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

import { ViroTrackingStateConstants } from '@viro-community/react-viro';

import { colors, fonts } from '../../styles';
import ARScene from '../../components/ARScene';
import ARObjects from '../../components/ARComponents/ARObjects';

import BotranARComponent from '../../components/ARComponents/BotranARComponent';

export default function HomeScreen() {
  const btnOrigin = require('./../../../assets/images/guatemala-origin-button.png');
  const btnDynamic = require('./../../../assets/images/dynamic-ageing-button.png');
  const btnAroundWorld = require('./../../../assets/images/around-the-world-button.png');
  const btnSustainable = require('./../../../assets/images/sustainable-button.png');
  const objects = ARObjects();
  let index = 0;
  const [state, setState] = useState({
    selected: objects[0][index],
    show3D: true,
    show32D: false,
    objects,
    pauseUpdates: true,
    isTracking: false,
    playAnim: false,
    objIndex: index,
    component: BotranARComponent,
    column: 1,
    targets: ['Botran12'],
    animationName: '',
    foundAnchor: null,
    position: [0, 0, 0],
    anchorId: null,
  });

  const _changeColumn = columnNew => {
    let currentColumn = columnNew === objects.length ? 1 : columnNew;
    index = 0;
    if (!objects[currentColumn]) {
      currentColumn = 1;
    }
    if (!objects[currentColumn][index]) {
      index = 0;
    }
    const selectedNew = objects[currentColumn][index];
    const temp = state;
    temp.animationName = '01';
    temp.playAnim = false;
    temp.objIndex = index;
    temp.loop = false;
    temp.selected = null;
    temp.column = currentColumn;
    temp.show3D = false;
    temp.show32D = false;
    setState({ ...temp });
    setTimeout(() => {
      temp.selected = selectedNew;
      temp.loop = true;
      temp.animationName = '';
      temp.playAnim = true;
      temp.show32D = true;
      temp.show3D = true;
      setState({ ...temp });
    }, 0);
  };

  const _onFinish = () => {
    const temp = state;
    temp.animationName = '';
    // temp.playAnim = false;
    // temp.column = column;
    // setState({ ...temp });

    // setTimeout(() => {
    //   console.log('cambio!!!!')
    //   _changeObject()
    // }, 1000);
  };

  const onFinishSound = () => {
    console.log('sonido acabado');
  };

  const _changeObject = () => {
    let currentColumn = state.column;
    if (objects) {
      if (currentColumn === objects.length) {
        currentColumn = 1;
      }
      index =
        state.objIndex === objects[currentColumn].length - 1
          ? 0
          : state.objIndex + 1;
      if (!objects[currentColumn][index]) {
        index = 0;
      }
      // if (index === (objects[currentColumn].length)) {
      //   currentColumn += 1;
      // }
    }
    const newSelected = objects[currentColumn][index];
    const temp = state;
    temp.playAnim = false;
    temp.show32D = false;
    temp.show3D = true;
    temp.animName = '01';
    temp.objIndex = index;
    temp.column = currentColumn;
    temp.selected = newSelected;
    setState({ ...temp });
    setTimeout(() => {
      temp.playAnim = true;
      temp.show32D = true;
      temp.animName = '';
      temp.show3D = true;
      setState({ ...temp });
    }, 0);
  };
  const _onAnchorFound = anchor => {
    const { anchorId } = state;
    const temp = state;

    if (!temp.playAnim) {
      temp.animationName = '01';
      temp.pauseUpdates = true;
      temp.playAnim = true;
      temp.show32D = true;
      temp.isTracking = false;
      temp.show3D = true;
      temp.foundAnchor = anchor || null;
      temp.anchorId = anchor ? anchor.anchorId : null;
      if (anchorId !== anchor.anchorId) {
        temp.foundAnchor = anchor || null;
        temp.anchorId = anchor ? anchor.anchorId : null;
      }
    }

    setState({ ...temp });
  };

  const _onAnchorLost = anchor => {
    console.log('ANCHORLost********:', anchor);
    // const temp = state;
    // temp.animationName = '01';
    // temp.pauseUpdates = true;
    // temp.playAnim = true;
    // temp.show32D = false;
    // temp.column = 1;
    // temp.foundAnchor = anchor;
    // temp.anchorId = anchor? anchor.anchorId : null;
    // setState({ ...temp });
  };

  const _onAnchorUpdate = anchor => {
    const temp = state;

    if (anchor.trackingMethod === 'tracking') {
      _onAnchorFound(anchor);
    } else {
      temp.isTracking = false;
      temp.playAnim = false;
      temp.show3D = false;
      temp.show32D = false;
      temp.anchorId = null;
      temp.foundAnchor = null;
      temp.animationName = 'NoAnimation';
      setState({ ...temp });
    }

    console.log('STATE: ', temp);
  };

  const _onCameraTransformUpdate = anchor => {
    const { position } = state;
    if (
      position &&
      (position[0] !== anchor.position[0] ||
        position[1] !== anchor.position[1] ||
        position[2] !== anchor.position[2])
    ) {
      const temp = state;
      temp.position = anchor.position;
      setState({ ...temp });
      console.log('CameraUpdate********:', position);
    }
  };

  return (
    <View style={styles.container}>
      <ARScene
        {...state}
        style={{ zIndex: 1 }}
        column={state.column}
        objIndex={state.objIndex}
        selected={state.selected}
        objects={objects}
        _onFinish={_onFinish}
        _onAnchorFound={_onAnchorFound}
        _onAnchorLost={_onAnchorLost}
        _onAnchorUpdate={_onAnchorUpdate}
        onFinishSound={onFinishSound}
        setState={setState}
        _onCameraTransformUpdate={_onCameraTransformUpdate}
        pauseUpdates
        playAnim={state.playAnim}
        targets={['Botran12']}
        foundAnchor={state.foundAnchor}
        _changeObject={_changeObject}
        show3D={state.show3D}
        show32D={state.show32D}
      />
      <View style={styles.section}>
        <View style={{ ...styles.container2, marginLeft: 'auto' }}>
          <TouchableOpacity
            onPress={() => {
              _changeColumn(2);
            }}
            style={{ ...styles.btn }}
          >
            <Image source={btnOrigin} style={styles.img} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              _changeColumn(3);
            }}
            style={styles.btn}
          >
            <Image source={btnDynamic} style={styles.img} />
          </TouchableOpacity>
        </View>
        <View style={{ ...styles.container2, marginLeft: 'auto' }}>
          <TouchableOpacity
            onPress={() => {
              _changeColumn(4);
            }}
            style={{ ...styles.btn }}
          >
            <Image source={btnAroundWorld} style={styles.img} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              _changeColumn(5);
            }}
            style={{ ...styles.btn }}
          >
            <Image source={btnSustainable} style={styles.img} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  section: {
    backfaceVisibility: 'hidden',
    position: 'absolute',
    bottom: 90,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 120,
  },
  img: {
    maxWidth: 125,
    maxHeight: 50,
    width: '100%',
    height: '100%',
  },
  btn: {
    width: '40%',
  },
});
