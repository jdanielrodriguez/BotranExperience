import React from 'react';
import {
  Image, ImageBackground, StyleSheet,
  View
} from 'react-native';

import { Text } from '../../components/StyledText';
import { colors, fonts } from '../../styles';

export default function NoIpadScreen() {

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode="stretch"
      >
        <Text style={{ ...styles.text, marginTop: 'auto' }}>This application is not able to work on IPAD.</Text>
        <Text style={{ ...styles.text, marginVertical: '10%' }}>Please use an IPHONE device to live the Botran Experience.</Text>
        <Text style={{ ...styles.mini_text, marginBottom: 'auto'  }}>Botran reserves the use of its digital products to the devices available and selected by them.</Text>
        <Image
          source={require('../../../assets/images/barra-abajo.png')}
          style={styles.barra}
          resizeMode="stretch"
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  bgImage: {
    flex: 1,
    marginHorizontal: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    padding: 5,
    fontFamily: fonts.primarySemiBold,
    borderBottomColor: colors.white,
  },
  instructions: {
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    borderBottomColor: colors.primary,
  },
  text: {
    color: colors.white,
    fontFamily: fonts.primarySemiBold,
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 50
  },
  mini_text: {
    color: colors.bluish,
    fontFamily: fonts.primaryRegular,
    textAlign: 'center',
    fontSize: 12,
    marginHorizontal: 50
  },
  barra: {
    position: 'absolute',
    bottom: 0,
    width: '184%',
    height: 28
  },
});
