import React, { useState } from 'react';
import {
  Dimensions, Image, StyleSheet, TouchableOpacity, View
} from 'react-native';

import ARObjects from '../../components/ARComponents/ARObjects';
import ARScene from '../../components/ARScene';

import BotranARComponent from '../../components/ARComponents/BotranARComponent';

export default function HomeScreen() {
  const btnOrigin = require('./../../../assets/images/guatemala-origin-button.png');
  const btnDynamic = require('./../../../assets/images/dynamic-ageing-button.png');
  const btnAroundWorld = require('./../../../assets/images/around-the-world-button.png');
  const btnSustainable = require('./../../../assets/images/sustainable-button.png');
  const objects = ARObjects();
  let index = 0;
  let column = 0;
  let isPlaying = false;
  let pauseTracking = false;

  const [state, setState] = useState({
    selected: objects[column][index],
    show3D: true,
    show32D: false,
    objects,
    pauseUpdates: false,
    isTracking: false,
    playAnim: false,
    quetzal: false,
    objIndex: index,
    component: BotranARComponent,
    column,
    targets: ['Botran12'],
    animationName: '',
    foundAnchor: null,
    position: [0, 0, 0],
    anchorId: null,
    target: '',
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
    column = currentColumn;

    temp.animationName = '01';
    temp.playAnim = false;
    temp.objIndex = index;
    temp.loop = false;
    temp.selected = null;
    temp.column = currentColumn;
    temp.show3D = false;
    temp.show32D = false;
    // temp.quetzal = true;
    isPlaying = true;
    temp.selected = selectedNew;
    setState({ ...temp });
    // setTimeout(() => {
    // temp.selected = selectedNew;
    // temp.loop = true;
    // temp.animationName = '';
    // temp.playAnim = true;
    // temp.show32D = true;
    // temp.show3D = true;
    // setState({ ...temp });
    // }, 100);
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

  const _onFinishQuetzal = columnNew => {
    pauseTracking = true;

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

    // Change resource online and indicate quetzal animation finish.
    temp.selected = selectedNew;
    temp.quetzal = false;

    setState({ ...temp });

    // After 3 seconds fire new status to indicate tracking can continue
    setTimeout(() => {
      isPlaying = false;
      pauseTracking = false;
    }, 3000);
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
    // setTimeout(() => {
    temp.playAnim = true;
    temp.show32D = true;
    temp.animName = '';
    temp.show3D = true;
    setState({ ...temp });
    // }, 0);
  };
  const _onAnchorFound = anchor => {
    console.log(`FOUND************* ${anchor.trackingMethod}`);

    const temp = state;
    const { anchorId } = state;

    if (!temp.playAnim) {
      temp.animationName = '';
      temp.pauseUpdates = true;
      temp.playAnim = true;
      temp.show32D = true;
      temp.isTracking = true;
      temp.show3D = true;

      if (anchorId !== anchor.anchorId) {
        temp.foundAnchor = anchor || null;
        temp.anchorId = anchor ? anchor.anchorId : null;
        temp.show3D = true;
        temp.isTracking = true;
        temp.show32D = true;
      }

      setState({ ...temp });
    }
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

  const _onAnchorUpdate = (anchor, target) => {
    const temp = state;

    console.log(
      `UPDATE* ${anchor.trackingMethod} - ${isPlaying} - ${target} - ${temp.target} - Q: ${temp.quetzal} - P ${pauseTracking}`,
    );

    if (!pauseTracking) {
      // Change status only if target is the same as selected
      if (temp.target === target) {
        if (!temp.quetzal && !isPlaying && anchor.trackingMethod === 'tracking') {
          isPlaying = true;
          _onAnchorFound(anchor);
        } else if (!temp.quetzal && isPlaying && anchor.trackingMethod === 'lastKnownPose') {
          temp.isTracking = false;
          temp.playAnim = false;
          temp.pauseUpdates = false;
          temp.show3D = false;
          temp.show32D = false;
          temp.anchorId = null;
          temp.foundAnchor = null;
          temp.animationName = 'NoAnimation';

          setState({ ...temp });
        }
      }
    }

    // Set target when status is tracking and is another element
    if (anchor.trackingMethod === 'tracking' && temp.target !== target) {
      temp.target = target;
      setState({ ...temp });
    }
  };

  const _onCameraTransformUpdate = anchor => {
    const temp = state;

    if (anchor.trackingMethod === 'tracking') {
      temp.anchorId = anchor.anchorId;
      temp.foundAnchor = anchor;
      temp.animationName = '';
      temp.pauseUpdates = false;
      temp.isTracking = true;
      temp.playAnim = true;
      temp.show3D = true;
      temp.show32D = true;
      setState({ ...temp });
      // console.log('anchor: ', anchor);
    } else if (anchor.trackingMethod === 'lastKnownPose') {
      temp.isTracking = false;
      temp.playAnim = false;
      temp.pauseUpdates = true;
      temp.show3D = false;
      temp.show32D = false;
      temp.anchorId = null;
      temp.foundAnchor = null;
      temp.animationName = 'NoAnimation';
      setState({ ...temp });
      // console.log('STATE: ', state);
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
        _onFinishQuetzal={_onFinishQuetzal}
        _onAnchorFound={_onAnchorFound}
        _onAnchorLost={_onAnchorLost}
        _onAnchorUpdate={_onAnchorUpdate}
        onFinishSound={onFinishSound}
        setState={setState}
        _onCameraTransformUpdate={_onCameraTransformUpdate}
        pauseUpdates
        playAnim={state.playAnim}
        targets={['Botran12', 'Botran15', 'Botran18']}
        foundAnchor={state.foundAnchor}
        _changeObject={_changeObject}
        show3D={state.show3D}
        show32D={state.show32D}
        _target={state.target}
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
    height: 150,
    zIndex: 9,
  },
  img: {
    maxWidth: 150,
    maxHeight: 62,
    width: '100%',
    height: '100%',
  },
  btn: {
    width: '45%',
  },
});
