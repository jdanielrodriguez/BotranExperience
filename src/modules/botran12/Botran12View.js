import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';

import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';



export default function Botran12Screen() {
  // const rnsUrl = 'https://reactnativestarter.com';
  // const handleClick = () => {
  //   Linking.canOpenURL(rnsUrl).then(supported => {
  //     if (supported) {
  //       Linking.openURL(rnsUrl);
  //     } else {
  //       console.log(`Don't know how to open URI: ${rnsUrl}`);
  //     }
  //   });
  // };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/background-mapa-pie.png')}
        style={styles.bgImage}
        resizeMode="stretch"
      >

        <View style={[styles.section, styles.sectionLarge]}>
          <Image
            source={require('../../../assets/images/about-blends.png')}
            style={styles.aboutBlend}
            resizeMode="stretch"
          />
          <Image
            source={require('../../../assets/images/title-ron-12.png')}
            style={styles.title12}
            resizeMode="stretch"
          />
          <Image
            source={require('../../../assets/images/botella-botran-12.png')}
            style={styles.bottles}
            resizeMode="stretch"
          />
          <View style={styles.priceContainer}>
            <View style={{ flexDirection: 'row' }}>
              <ScrollView style={styles.scrollView}>
                <Text size={12} style={styles.instructions}>
                  BOTRAN 12
                </Text>
                <Text size={12} style={styles.instructions}>
                  CAPTIVATING
                </Text>
                <Text size={12} style={styles.instructions}>
                  -Dynamic Ageing (Solera adapted).
                </Text>
                <Text size={12} style={styles.instructions}>
                  -Blend of 5-12-year-old rums.
                </Text>
                <Text size={12} style={styles.instructions}>
                  -American whiskey.
                </Text>
                <Text size={12} style={styles.instructions}>
                  -Medium toasted American whiskey.
                </Text>
                <Text size={12} style={styles.instructions}>
                  -Sherry wines. (Oloroso)
                </Text>
                <Text size={12} style={styles.instructions}>
                  COLOUR
                </Text>
                <Text size={12} style={styles.instructions}>
                  Mahogany with golden highlights.
                </Text>
                <Text size={12} style={styles.instructions}>
                  NOSE
                </Text>
                <Text size={12} style={styles.instructions}>
                  Delicious notes of vanilla, toasted
                </Text>
                <Text size={12} style={styles.instructions}>
                  oak and dried fruits (like nuts and almonds)
                </Text>
                <Text size={12} style={styles.instructions}>
                  PALATE
                </Text>
                <Text size={12} style={styles.instructions}>
                  Dried fruits and Oak notes.
                </Text>
                <Text size={12} style={styles.instructions}>
                  FINISH
                </Text>
                <Text size={12} style={styles.instructions}>
                  Toasted oak and vanilla notes.
                </Text>
                <Text size={12} style={styles.instructions}>
                  PERFECT SERVE
                </Text>
                <Text size={12} style={styles.instructions}>
                  Perfect for uplifting any cocktail.
                </Text>
                <Text size={12} style={styles.instructions}>
                  Ideal with citrus, salty, bitter and sweet flavours.
                </Text>
              </ScrollView>
            </View>
          </View>
        </View>
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
  bgImage: {
    flex: 1,
    marginHorizontal: 0,
  },
  gotIt: {
    width: 100,
    height: 50,
    marginTop: 15,
  },
  scrollView: {
    width: '100%',
    paddingBottom: 3
  },
  bottles: {
    width: '50%',
    height: '70%',
    marginLeft: -50
  },
  aboutBlend: {
    width: '30%',
    height: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: -40,
    marginTop: 20,
  },
  title12: {
    width: '60%',
    height: '15%',
    marginLeft: 160,
    marginTop: 120,
    position: 'absolute',
    zIndex: 9999,
  },
  aboutTitle: {
    width: '50%',
    height: '20%',
    position: 'absolute',
    zIndex: 9999,
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
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
    maxHeight: 150
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
  barra: {
    position: 'absolute',
    bottom: 0,
    width: '184%',
    height: 28
  },
});
