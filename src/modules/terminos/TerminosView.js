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



export default function TerminosYCondicionesScreen() {
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
        source={require('../../../assets/images/background-mapa.png')}
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
            source={require('../../../assets/images/title-ron-18.png')}
            style={styles.title18}
            resizeMode="stretch"
          />
          <Image
            source={require('../../../assets/images/botella-botran-18.png')}
            style={styles.bottles}
            resizeMode="stretch"
          />
          <View style={styles.priceContainer}>
            <View style={{ flexDirection: 'row' }}>
              <ScrollView style={styles.scrollView}>
                <Text size={12} style={styles.instructions}>
                  ELEGANT.
                </Text>
                <Text size={12} style={styles.instructions}>
                  BOTRAN 18
                </Text>

                <Text size={12} style={styles.instructions}>
                  PERFECT SERVE
                </Text>
                <Text size={12} style={styles.instructions}>
                  Enjoy neat or on the rocks for a journey into
                </Text>
                <Text size={12} style={styles.instructions}>
                  Guatemalan flavour.
                </Text>
                <Text size={12} style={styles.instructions}>
                  Born in 1893, Don Venancio was the first Botran Merino brother
                  to be inspired by glorious Guatemala.
                </Text>
                <Text size={12} style={styles.instructions}>
                  Botran 18 is a blend for him. His passion, fire and determination
                </Text>
                <Text size={12} style={styles.instructions}>
                  – in one bottle.
                </Text>
                <Text size={12} style={styles.instructions}>
                  -Dynamic Ageing (Solera adapted).
                </Text>
                <Text size={12} style={styles.instructions}>
                  -Blend of 5-18-year-old rums.
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
                  -Port wines. (Tawny)
                </Text>
                <Text size={12} style={styles.instructions}>
                  COLOUR
                </Text>
                <Text size={12} style={styles.instructions}>
                  Deep mahogany with beams of
                  reddish light.
                </Text>
                <Text size={12} style={styles.instructions}>
                  NOSE
                </Text>
                <Text size={12} style={styles.instructions}>
                  Initial notes of maple syrup and
                  caramelised aromas.
                </Text>
                <Text size={12} style={styles.instructions}>
                  Dark chocolate notes emerge as
                  the rum evolves in the glass.
                </Text>
                <Text size={12} style={styles.instructions}>
                  PALATE
                </Text>
                <Text size={12} style={styles.instructions}>
                  Dry with notes of dried plum and
                  dark chocolate.
                </Text>
                <Text size={12} style={styles.instructions}>
                  FINISH
                </Text>
                <Text size={12} style={styles.instructions}>
                  Toasted oak and dark chocolate notes.
                </Text>
                <Text size={12} style={styles.instructions}>
                  PERFECT SERVE
                </Text>
                <Text size={12} style={styles.instructions}>
                  Enjoy neat or on the rocks for a journey into
                  Guatemalan flavour.
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
  },
  bottles: {
    width: '70%',
    height: '70%',
    marginLeft: -70
  },
  aboutBlend: {
    width: '30%',
    height: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: -40,
    marginTop: 20,
  },
  title18: {
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
    color: '#00B8B0',
    textAlign: 'center',
    fontFamily: fonts.primarySemiBold,
    fontSize: 15,
  },
  instructions: {
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    borderBottomColor: colors.primary,
  },
  title: {
    textAlign: 'center',
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
