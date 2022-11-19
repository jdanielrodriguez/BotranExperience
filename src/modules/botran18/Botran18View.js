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
            style={{ ...styles.logo, marginTop: 40 }}
            resizeMode="stretch"
          />
        </View>
        <View style={{ ...styles.section, height: '20%' }}>
          <Image
            source={require('../../../assets/images/botellas/18/blend.png')}
            style={styles.blend}
            resizeMode="stretch"
          />
          <Text size={10} style={styles.titulo}>
            Born in 1893, Don venancio was the first Botran Merino Brother to be inspired by glorious Guatemala.
          </Text>
          <Text size={10} style={styles.titulo1}>
            Botran 18 is a blend for him, His passion, fire and determination in one bottle.
          </Text>
        </View>
        <Image
          source={require('../../../assets/images/botellas/12/divider.png')}
          style={styles.divider}
          resizeMode="stretch"
        />
        <View style={{ ...styles.section, height: '40%' }}>
          <View style={{ ...styles.container2 }}>
            <View style={{ display: 'flex', height: '100%', width: '30%' }}>
              <Image
                source={require('../../../assets/images/botellas/18/icono_botella.png')}
                style={{ ...styles.icono, marginTop: 'auto', marginBottom: 'auto' }}
                resizeMode="stretch"
              />
            </View>
            <View style={{ display: 'flex', height: '100%', width: '70%' }}>
              <Text size={12} style={{ ...styles.option, marginTop: 'auto' }}>
                -Dinamic Ageing (Solera Adapted).
              </Text>
              <Text size={12} style={{ ...styles.option, marginBottom: 'auto' }}>
                -Blend of 5-18-year old rums.
              </Text>
            </View>
          </View>
          <View style={{ ...styles.container2 }}>
            <View style={{ display: 'flex', height: '100%', width: '30%' }}>
              <Image
                source={require('../../../assets/images/botellas/18/icono_barril.png')}
                style={{ ...styles.icono, marginTop: 'auto', marginBottom: 'auto' }}
                resizeMode="stretch"
              />
            </View>
            <View style={{ display: 'flex', height: '100%', width: '70%' }}>
              <Text size={12} style={{ ...styles.option, marginTop: 'auto' }}>
                -American whiskey.
              </Text>
              <Text size={12} style={{ ...styles.option }}>
                -Medium toasted American whiskey.
              </Text>
              <Text size={12} style={{ ...styles.option }}>
                -Sherry wines. (Oloroso)
              </Text>
              <Text size={12} style={{ ...styles.option, marginBottom: 'auto' }}>
                -Port wines. (tawny)
              </Text>
            </View>
          </View>
          <View style={{ ...styles.container2 }}>
            <View style={{ display: 'flex', height: '100%', width: '30%' }}>
              <Image
                source={require('../../../assets/images/botellas/18/icono_flor.png')}
                style={{ ...styles.icono, marginTop: 10, marginBottom: 'auto' }}
                resizeMode="stretch"
              />
            </View>
            <View style={{ display: 'flex', height: '100%', width: '70%' }}>
              <Text size={12} style={{ ...styles.tituloOption }}>
                COLOUR
              </Text>
              <Text size={12} style={{ ...styles.textoOption }}>
                Deep mahogany with beams of reddish light.
              </Text>
              <Text size={12} style={{ ...styles.tituloOption }}>
                NOSE
              </Text>
              <Text size={12} style={{ ...styles.textoOption }}>
                Initial notes of maple syrup and caramelises aromas.
              </Text>
              <Text size={12} style={{ ...styles.textoOption }}>
                Dark Chocolate notes emerge as the rum evolves in the glass.
              </Text>
              <Text size={12} style={{ ...styles.tituloOption }}>
                PALATE
              </Text>
              <Text size={12} style={{ ...styles.textoOption }}>
                Dry with notes of dried plum and dark chocolate.
              </Text>
              <Text size={12} style={{ ...styles.tituloOption }}>
                FINISH
              </Text>
              <Text size={12} style={{ ...styles.textoOption }}>
                Toasted oak and dark chocolate notes.
              </Text>
            </View>
          </View>
        </View>
        <Image
          source={require('../../../assets/images/botellas/12/divider.png')}
          style={styles.divider2}
          resizeMode="stretch"
        />
        <View style={{ ...styles.section, height: '30%' }}>
          <Text size={12} style={styles.footer_title}>
            PERFECT SERVE
          </Text>
          <Text size={12} style={styles.footer}>
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
    width,
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
  bgImage: {
    width,
    minWidth: width,
  },
  fondo_color: {
    backgroundColor: '#00B8B0',
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
    width: '40%',
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  blend: {
    width: '50%',
    height: '30%',
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  divider: {
    width: '70%',
    height: '0.5%',
    marginTop: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  divider2: {
    width: '70%',
    height: '0.5%',
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
    width: 50,
    height: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
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
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '90%',
  },
  botella_container: {
    width,
    height: '70%',
    paddingTop: 50,
    paddingBottom: 50,
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
    color: '#00B8B0',
    textAlign: 'center',
    fontFamily: fonts.primarySemiBold,
    fontSize: 15,
  },
  instructions: {
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    borderBottomColor: colors.primary,
  },
  option: {
    fontFamily: fonts.primaryRegular,
    color: colors.white,
    fontSize: 11,
    marginTop: 5,
    marginBottom: 5,
    width: '100%',
    height: 'auto'
  },
  titulo: {
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    color: colors.white,
    marginTop: 10,
    fontSize: 10,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  titulo1: {
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    color: colors.white,
    fontSize: 10,
    marginTop: 15,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  tituloOption: {
    fontFamily: fonts.primaryRegular,
    color: colors.primaryLight,
    marginTop: 10,
    fontSize: 12,
    width: '80%',
  },
  textoOption: {
    fontFamily: fonts.primaryRegular,
    color: colors.white,
    fontSize: 10,
    width: '80%',
  },
  footer_title: {
    fontFamily: fonts.primaryRegular,
    color: colors.primaryLight,
    marginTop: 10,
    fontSize: 13,
    textAlign: 'center',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  footer: {
    fontFamily: fonts.primaryRegular,
    color: colors.white,
    textAlign: 'center',
    marginTop: 10,
    fontSize: 12,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto'
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
