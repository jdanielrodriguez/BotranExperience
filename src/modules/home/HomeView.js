import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import { colors, fonts } from '../../styles';
import ARScene from '../../components/ARScene';
import ARObjects from '../../components/ARComponents/ARObjects';

import BotranARComponent from '../../components/ARComponents/BotranARComponent';


export default function HomeScreen() {
  const btnOrigin = require("./../../../assets/images/guatemala-origin-button.png");
  const btnDynamic = require("./../../../assets/images/dynamic-ageing-button.png");
  const btnAroundWorld = require("./../../../assets/images/around-the-world-button.png");
  const btnSustainable = require("./../../../assets/images/sustainable-button.png");
  const objects = ARObjects();
  let index = 0;
  const column = 0;
  const [state, setState] = useState({
    selected: objects[0][0],
    show3D: true,
    updatedKey: 1,
    objects,
    pauseUpdates: true,
    playAnim: true,
    objIndex: index,
    component: BotranARComponent,
    column,
    targets: ['Botran12'],
    animationName: '',
    foundAnchor: null,
    anchorId: null
  })

  const _changeColumn = (columnNew) => {
    const animate = state.playAnim;
    const { updatedKey } = state;
    let currentColumn = (columnNew <= objects.length) ? columnNew : 0
    index = 0;
    if (!objects[currentColumn]) {
      currentColumn = 0;
    }
    if (!objects[currentColumn][index]) {
      index = 0;
    }
    let selectedNew = objects[currentColumn][index]
    if (!selectedNew) {
      currentColumn = 0;
      index = 0;
      selectedNew = objects[currentColumn][index]
    }
    setState({
      animationName: '01',
      playAnim: !animate,
      objIndex: index,
      loop: false,
      selected: null,
      column: currentColumn,
      updatedKey: updatedKey + 1,
      show3D: false
    })
    setTimeout(() => {
      setState({
        selected: selectedNew,
        loop: true,
        animationName: '',
        playAnim: animate,
        show3D: true
      })
    }, 100);
  }

  return (
    <View style={styles.container}>
      {state.show3D && <ARScene {...state} selected={state.selected} />}
      {/* {!state.show3D && <ARScene {...state} selected={state.selected} />} */}
      <View style={styles.section2}>
        <TouchableOpacity onPress={() => { _changeColumn(4) }} style={styles.btn1}>
          <Image source={btnSustainable} style={styles.img2} />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity onPress={() => { _changeColumn(1) }} style={styles.btn}>
          <Image source={btnOrigin} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { _changeColumn(2) }} style={styles.btn}>
          <Image source={btnDynamic} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { _changeColumn(3) }} style={styles.btn}>
          <Image source={btnAroundWorld} style={styles.img} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
  },
  section: {
    flex: 2,
    backfaceVisibility: 'hidden',
    position: 'absolute',
    marginTop: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%'
  },
  section2: {
    flex: 2,
    backfaceVisibility: 'hidden',
    position: 'absolute',
    marginTop: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%'
  },
  img2: {
    width: 362,
    height: 42
  },
  img: {
    width: 115,
    height: 55
  },
  btn: {
    marginTop: 620,
    marginLeft: 9
  },
  btn1: {
    marginTop: 670,
    marginLeft: 9
  },
  absoluteView: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  sectionHeader: {
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
  },
  description: {
    padding: 15,
    lineHeight: 25,
  },
  titleDescription: {
    color: '#19e7f7',
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  title: {
    marginTop: 30,
  },
  price: {
    marginBottom: 5,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
});
