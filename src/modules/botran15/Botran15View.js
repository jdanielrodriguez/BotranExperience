import React from 'react';
import {
  Dimensions, Image,
  ScrollView, StyleSheet
} from 'react-native';

import { colors, fonts } from '../../styles';



export default function Botran15Screen() {
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
    <ScrollView style={styles.scrollView}>
      <Image
        source={require('../../../assets/images/Botran-15-sales-sheets.jpg')}
        style={styles.bgImage}
        resizeMode="stretch"
      >

        {/* <View style={[styles.section, styles.sectionLarge]}> */}
        {/* <Image
            source={require('../../../assets/images/about-blends.png')}
            style={styles.aboutBlend}
            resizeMode="stretch"
          />
          <Image
            source={require('../../../assets/images/title-ron-15.png')}
            style={styles.title15}
            resizeMode="stretch"
          /> */}
        {/* <Image
            source={require('../../../assets/images/botella-botran-15.png')}
            style={styles.bottles}
            resizeMode="stretch"
          /> */}
        {/* <View style={styles.priceContainer}>
            <View style={{ flexDirection: 'row' }}>
              <ScrollView style={styles.scrollView}>
                <Text size={12} style={styles.instructions}>
                  EXPRESSIVE
                </Text>
                <Text size={12} style={styles.instructions}>
                  BOTRAN
                </Text>
                <Text size={12} style={styles.instructions}>
                  -Dynamic Ageing (Solera adapted).
                </Text>
                <Text size={12} style={styles.instructions}>
                  -Blend of 5-15-year-old rums.
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
                  Polished mahogany with reddish
                  reflecting sparkles.
                </Text>
                <Text size={12} style={styles.instructions}>
                  NOSE
                </Text>
                <Text size={12} style={styles.instructions}>
                  Notes of ripe fruits and citric & spicy
                  aromas.
                </Text>
                <Text size={12} style={styles.instructions}>
                  PALATE
                </Text>
                <Text size={12} style={styles.instructions}>
                  Notes of apricot, orange peel, and
                  Spices (like clove and cinnamon)
                </Text>

                <Text size={12} style={styles.instructions}>
                  FINISH
                </Text>
                <Text size={12} style={styles.instructions}>
                  Toasted oak and spicy notes.
                </Text>

                <Text size={12} style={styles.instructions}>
                  PERFECT SERVE
                </Text>
                <Text size={12} style={styles.instructions}>
                  The best rum to freshen up an Old Fashioned, or
                  enjoy alone for a tongue-tingling taste experience.

                </Text>
              </ScrollView>
            </View>
          </View> */}
        {/* </View> */}
        {/* <Image
          source={require('../../../assets/images/barra-abajo.png')}
          style={styles.barra}
          resizeMode="stretch"
        /> */}
      </Image>
    </ScrollView>
  );
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
  },
  bgImage: {
    width,
    minWidth: width,
  },
  gotIt: {
    width: 100,
    height: 50,
    marginTop: 15,
  },
  scrollView: {
    width,
    height,
    minWidth: width,
    minHeight: height,
  },
  bottles: {
    width: '30%',
    height: '40%',
    marginLeft: 95,
    marginTop:280
  },
  aboutBlend: {
    width: '30%',
    height: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: -40,
    marginTop: 20,
  },
  title15: {
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
    paddingHorizontal: '10%',
    color: 'white'
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
