import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';

import { fonts, colors } from '../../styles';



export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/about-us-full.png')}
        style={styles.bgImage}
        resizeMode="stretch"
      >
        {/* <View style={[styles.section, styles.sectionLarge]}>
          <Image
            source={require('../../../assets/images/about-button.png')}
            style={styles.aboutTitle}
            resizeMode="stretch"
          />
          <Image
            source={require('../../../assets/images/bottles.png')}
            style={styles.bottles}
            resizeMode="stretch"
          />
          <View style={styles.priceContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Text white size={15} style={styles.instructions}>
                We want to give the world a taste of the freedom, rhythm and vitality we feel here.
                We grow, ferment and distil our cane in the rich green fields of Retalhuleu.
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text white size={15} style={styles.instructions}>
                Then we age our rums in the montains of Quetzaltenango, perfect contidions for.
              </Text>
            </View>
          </View>
        </View> */}
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
  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    marginHorizontal: 0,
  },
  gotIt: {
    width: 100,
    height: 50,
    marginTop: 15,
  },
  bottles: {
    width: '100%',
    height: '50%',
    marginTop: 150,
    marginBottom: -100,
  },
  aboutTitle: {
    width: '80%',
    height: '20%',
    position: 'absolute',
    zIndex: 9999,
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLarge: {
    flex: 2,
    justifyContent: 'space-around',
  },
  sectionHeader: {
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
    maxHeight: 150,
  },
  description: {
    padding: 15,
    lineHeight: 25,
  },
  titleDescription: {
    color: '#19e7f7',
    textAlign: 'center',
    fontFamily: fonts.primarySemiBold,
    fontSize: 15,
  },
  instructions: {
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    paddingHorizontal: '10%'
  },
  title: {
    textAlign: 'center',
    paddingHorizontal: '10%',
    fontWeight: 'normal',
    fontFamily: fonts.primarySemiBold,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
});
