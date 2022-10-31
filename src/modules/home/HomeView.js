import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image, Dimensions
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
  const [state, setState] = useState({
    selected: objects[1][index],
    show3D: true,
    show32D: true,
    updatedKey: 1,
    objects,
    pauseUpdates: true,
    playAnim: true,
    objIndex: index,
    component: BotranARComponent,
    column: 1,
    targets: ['Botran12'],
    animationName: '',
    foundAnchor: null,
    anchorId: null
  })
  const { updatedKey, column } = state;

  const _changeColumn = (columnNew) => {
    let currentColumn = (columnNew === (objects.length)) ? 1 : columnNew;
    index = 0;
    if (!objects[currentColumn]) {
      currentColumn = 1;
    }
    if (!objects[currentColumn][index]) {
      index = 0;
    }
    const selectedNew = objects[currentColumn][index]
    const temp = state;
    temp.animationName = '01';
    temp.playAnim = false;
    temp.objIndex = index;
    temp.loop = false;
    temp.selected = null;
    temp.column = currentColumn;
    temp.updatedKey = updatedKey + 1;
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
    }, 10);
  }

  const _onFinish = () => {
    const temp = state;
    temp.animationName = '';
    temp.playAnim = false;
    temp.column = column;
    setState({ ...temp });

    // setTimeout(() => {
    //   console.log('cambio!!!!')
    //   _changeObject()
    // }, 1000);
  }

  const _changeObject = () => {
    let currentColumn = column;
    if (objects) {
      if (currentColumn === (objects.length)) {
        currentColumn = 1;
      }
      index = (index === (objects[currentColumn].length)) ? 0 : index + 1
      if (!objects[currentColumn][index]) {
        index = 0;
      }
      // if (index === (objects[currentColumn].length)) {
      //   currentColumn += 1;
      // }
    }
    const newSelected = objects[currentColumn][index]
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
  }

  const _onAnchorFound = (anchor) => {
    console.log('ANCHOR********:', anchor)
    const temp = state;
    temp.animationName = '';
    temp.pauseUpdates = false;
    temp.playAnim = true;
    temp.show32D = true;
    temp.foundAnchor = anchor;
    temp.anchorId = anchor.anchorId
    setState({ ...temp });
  }

  const _onAnchorLost = (anchor) => {
    console.log('ANCHORLost********:', anchor)
    const temp = state;
    temp.animationName = '01';
    temp.pauseUpdates = true;
    temp.playAnim = false;
    temp.show32D = false;
    temp.column = 1;
    temp.foundAnchor = anchor;
    temp.anchorId = anchor.anchorId
    setState({ ...temp });
  }

  const _onAnchorUpdate = (anchor) => {
    console.log('ANCHORUPDATE********:', anchor)
    const { anchorId } = state;
    const temp = state;
    temp.animationName = '01';
    temp.pauseUpdates = true;
    temp.playAnim = false;
    temp.show32D = false;
    temp.column = 1;
    temp.foundAnchor = anchor;
    temp.anchorId = anchorId !== anchor.anchorId ? anchor.anchorId : anchorId
    setState({ ...temp });
  }

  return (
    <View style={styles.container}>
      {state.show3D && (
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
          pauseUpdates
          playAnim={state.playAnim}
          targets={['Botran12']}
          foundAnchor={state.foundAnchor}
          _changeObject={_changeObject}
          show3D={state.show3D}
          show32D={state.show32D}
        />
      )}
      <View style={styles.section}>
        <TouchableOpacity onPress={() => { _changeColumn(2) }} style={{ ...styles.btn, marginLeft: '14%' }}>
          <Image source={btnOrigin} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { _changeColumn(3) }} style={styles.btn}>
          <Image source={btnDynamic} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { _changeColumn(4) }} style={{ ...styles.btn, marginRight: 'auto' }}>
          <Image source={btnAroundWorld} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { _changeColumn(5) }} style={styles.btnSustentable}>
          <Image source={btnSustainable} style={styles.imgSustentable} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width
  },
  bgImage: {
    flex: 1,
  },
  section: {
    backfaceVisibility: 'hidden',
    position: 'absolute',
    bottom: 90,
    flexWrap: 'wrap',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 85,
  },
  imgSustentable: {
    maxWidth: 300,
    maxHeight: 32,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btnSustentable: {
    position: 'absolute',
    zIndex: 99,
    marginLeft: '13%',
    marginTop: '13%',
    width: '70%'
  },
  img: {
    maxWidth: 110,
    maxHeight: 45,
    width: '100%',
    height: '100%'
  },
  img1: {
    maxWidth: 90,
    maxHeight: 45,
    width: '50%',
    height: '100%'
  },
  btn: {
    width: '27%'

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
