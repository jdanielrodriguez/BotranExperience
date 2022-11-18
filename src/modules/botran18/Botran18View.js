import React from 'react';
import {
  Dimensions, Image, View,
  ScrollView, StyleSheet, Text
} from 'react-native';

import { colors, fonts } from '../../styles';



export default function Botran18Screen() {
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
        source={require('../../../assets/images/botellas/18/fondo.png')}
        style={styles.fondo}
        resizeMode="stretch"
      />
      <Image
        source={require('../../../assets/images/botellas/18/cover.png')}
        style={styles.cover}
        resizeMode="stretch"
      />
      {/* <Image
        source={require('../../../assets/images/Botran-18-sales-sheets.jpg')}
        style={styles.bgImage}
        resizeMode="stretch"
      /> */}
      <View style={[styles.sectionLarge]}>
        <View style={{ ...styles.section, height: '10%' }}>
          <Image
            source={require('../../../assets/images/botellas/18/logo.png')}
            style={styles.logo}
            resizeMode="stretch"
          />
        </View>
        <View style={{ ...styles.section, height: '20%' }}>
          <Image
            source={require('../../../assets/images/botellas/18/blend.png')}
            style={styles.blend}
            resizeMode="stretch"
          />
          <Text size={12} style={styles.instructions}>
            Born in 1893, Don venancio was the first Botran Merino Brother to be inspired by glorious Guatemala.
          </Text>
          <Text size={12} style={styles.instructions}>
            Botran 18 is a blend for him, His passion, fire and determination in one bottle.
          </Text>
        </View>
        <View style={{ ...styles.section, height: '40%' }}>
          <View style={{ ...styles.container2 }}>
            <View style={{ ...styles.item, height: '100%', width: '30%' }}>
              <Image
                source={require('../../../assets/images/botellas/18/icono_botella.png')}
                style={styles.icono}
                resizeMode="stretch"
              />
            </View>
            <View style={{ ...styles.item, height: '100%', width: '70%', borderColor: '#000' }}>
              <Text size={12} style={{width: '100%', height: 'auto'}}>
                -Dinamic Ageing (Solera Adapted).
              </Text>
              <Text size={12} style={{width: '100%', height: 'auto'}}>
                -Blend of 5-18-year old rums.
              </Text>
            </View>
          </View>
          <View style={{ ...styles.container2 }}>
            <View style={{ ...styles.item, height: '100%', width: '30%' }}>
              <Image
                source={require('../../../assets/images/botellas/18/icono_barril.png')}
                style={styles.icono}
                resizeMode="stretch"
              />
            </View>
            <View style={{ ...styles.item, height: '100%', width: '70%', borderColor: '#000' }}>
              <Text size={12} style={{width: '100%', height: 'auto'}}>
                -American whiskey.
              </Text>
              <Text size={12} style={{width: '100%', height: 'auto'}}>
                -Medium toasted American whiskey.
              </Text>
              <Text size={12} style={{width: '100%', height: 'auto'}}>
                -Sherry wines. (Oloroso)
              </Text>
              <Text size={12} style={{width: '100%', height: 'auto'}}>
                -Port wines. (tawny)
              </Text>
            </View>
          </View>
          <View style={{ ...styles.container2 }}>
            <View style={{ ...styles.item, height: '100%', width: '30%' }}>
              <Image
                source={require('../../../assets/images/botellas/18/icono_flor.png')}
                style={styles.icono}
                resizeMode="stretch"
              />
            </View>
            <View style={{ ...styles.item, height: '100%', width: '70%', borderColor: '#000' }}>
              <Text size={12} style={{width: '100%', height: 'auto'}}>
                COLOUR
              </Text>
              <Text size={12} style={{width: '100%', height: 'auto'}}>
                Deep mahogany with beams of reddish light.
              </Text>
              <Text size={12} style={{width: '100%', height: 'auto'}}>
                NOSE
              </Text>
              <Text size={12} style={{width: '100%', height: 'auto'}}>
                Initial notes of maple syrup and caramelises aromas.
              </Text>
              <Text size={12} style={{width: '100%', height: 'auto'}}>
                Dark Chocolate notes emerge as the rum evolves in the glass.
              </Text>
              <Text size={12} style={{width: '100%', height: 'auto'}}>
                PALATE
              </Text>
              <Text size={12} style={{width: '100%', height: 'auto'}}>
                Dry with notes of dried plum and dark chocolate.
              </Text>
              <Text size={12} style={{width: '100%', height: 'auto'}}>
                FINISH
              </Text>
              <Text size={12} style={{width: '100%', height: 'auto'}}>
                Toasted oak and dark chocolate notes.
              </Text>
            </View>
          </View>
        </View>
        <View style={{ ...styles.section, height: '30%' }}>
          <Text size={12} style={styles.instructions}>
            PERFECT SERVE
          </Text>
          <Text size={12} style={styles.instructions}>
            Enjoy neat or on the rocks for a journey into
            Guatemalan flavour.
          </Text>
        </View>
      </View>
      <View style={[styles.sectionLarge, styles.fondo_color]}>
        <Image
          source={require('../../../assets/images/botellas/18/trago.png')}
          style={styles.trago}
          resizeMode="stretch"
        />
        <View style={styles.botella_container}>
          <Image
            source={require('../../../assets/images/botellas/18/botella.png')}
            style={styles.botella}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.hashtag_container}>
          <Image
            source={require('../../../assets/images/botellas/18/hashtag.png')}
            style={styles.hashtag}
            resizeMode="stretch"
          />
        </View>
      </View>
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
  container2: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
  item: {
    width: '50%' // is 50% of container width
  },
  bgImage: {
    width,
    minWidth: width,
  },
  fondo_color: {
    backgroundColor: '#19e7f7',
  },
  fondo: {
    width,
    minWidth: width,
    position: 'absolute'
  },
  cover: {
    width,
    position: 'absolute'
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
    height: '30%',
    marginLeft: 97,
    marginTop: 350
  },
  logo: {
    width: '30%',
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  blend: {
    width: '70%',
    height: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title18: {
    width: '60%',
    height: '15%',
    marginLeft: 160,
    marginTop: 120,
    zIndex: 9999,
  },
  aboutTitle: {
    width: '50%',
    height: '20%',
    zIndex: 9999,
  },
  section: {
    backfaceVisibility: 'hidden',
    width: '100%'
  },
  column: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
  },
  icono: {
    width: '100%',
    height: '100%'
  },
  sectionLarge: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
    minWidth: width,
    minHeight: height + 150, 
  },
  trago: {
    width,
    height: '50%'
  },
  botella: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '90%',
  },
  botella_container: {
    width,
    height: '70%',
  },
  hashtag_container: {
    height: '10%',
    width: '100%',
  },
  hashtag: {
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    top: -125,
    height: '30%',
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
