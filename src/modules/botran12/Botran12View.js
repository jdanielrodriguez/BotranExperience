import React from 'react';
import {
  Dimensions, Image, Text,
  ScrollView, StyleSheet, View
} from 'react-native';

import { colors, fonts } from '../../styles';



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
    <ScrollView style={styles.scrollView}>
      <Image
        source={require('../../../assets/images/botellas/12/fondo.png')}
        style={styles.fondo}
        resizeMode="stretch"
      />
      <Image
        source={require('../../../assets/images/botellas/12/cover.png')}
        style={styles.cover}
        resizeMode="stretch"
      />
      {/* <Image
        source={require('../../../assets/images/Botran-18-sales-sheets.jpg')}
        style={styles.bgImage}
        resizeMode="stretch"
      /> */}
      <View style={[styles.sectionLarge]}>
        <View style={{ ...styles.section, height: '10%', marginTop: '25%' }}>
          <Image
            source={require('../../../assets/images/botellas/12/logo.png')}
            style={{ ...styles.logo }}
            resizeMode="stretch"
          />
        </View>
        <View style={{ ...styles.section, height: '30%', marginTop: '-20%' }}>
          <Image
            source={require('../../../assets/images/botellas/12/blend.png')}
            style={styles.blend}
            resizeMode="stretch"
          />
          <Text size={10} style={styles.titulo}>
            The top-selling run in Guatemala, you won't experience our
          </Text>
          <Text size={10} style={styles.titulo1}>
            energy until you've tried Botran 12
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
                source={require('../../../assets/images/botellas/12/icono_botella.png')}
                style={{ ...styles.icono, marginTop: 'auto', marginBottom: 'auto' }}
                resizeMode="stretch"
              />
            </View>
            <View style={{ display: 'flex', height: '100%', width: '70%' }}>
              <Text size={12} style={{ ...styles.option, marginTop: 'auto' }}>
                -Dinamic Ageing (Solera Adapted).
              </Text>
              <Text size={12} style={{ ...styles.option, marginBottom: 'auto' }}>
                -Blend of 5-12-year old rums.
              </Text>
            </View>
          </View>
          <View style={{ ...styles.container2 }}>
            <View style={{ display: 'flex', height: '100%', width: '30%' }}>
              <Image
                source={require('../../../assets/images/botellas/12/icono_barril.png')}
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
              <Text size={12} style={{ ...styles.option, marginBottom: 'auto' }}>
                -Sherry wines. (Oloroso)
              </Text>
            </View>
          </View>
          <View style={{ ...styles.container2 }}>
            <View style={{ display: 'flex', height: '100%', width: '30%' }}>
              <Image
                source={require('../../../assets/images/botellas/12/icono_flor.png')}
                style={{ ...styles.icono, marginTop: 10, marginBottom: 'auto' }}
                resizeMode="stretch"
              />
            </View>
            <View style={{ display: 'flex', height: '100%', width: '70%' }}>
              <Text size={12} style={{ ...styles.tituloOption }}>
                COLOUR
              </Text>
              <Text size={12} style={{ ...styles.textoOption }}>
                Mahogany with golden highlights.
              </Text>
              <Text size={12} style={{ ...styles.tituloOption }}>
                NOSE
              </Text>
              <Text size={12} style={{ ...styles.textoOption }}>
                Delicious notes of vanilla, toasted
              </Text>
              <Text size={12} style={{ ...styles.textoOption }}>
                oak and dried fruits (like nuts and almonds)
              </Text>
              <Text size={12} style={{ ...styles.tituloOption }}>
                PALATE
              </Text>
              <Text size={12} style={{ ...styles.textoOption }}>
                Dried fruits and Oak notes.
              </Text>
              <Text size={12} style={{ ...styles.tituloOption }}>
                FINISH
              </Text>
              <Text size={12} style={{ ...styles.textoOption }}>
                Toasted oak and vanilla notes.
              </Text>
            </View>
          </View>
        </View>
        <Image
          source={require('../../../assets/images/botellas/12/divider.png')}
          style={styles.divider2}
          resizeMode="stretch"
        />
        <View style={{ ...styles.section, height: '30%', marginBottom: '-10%' }}>
          <Text size={12} style={styles.footer_title}>
            PERFECT SERVE
          </Text>
          <Text size={12} style={styles.footer}>
            Perfect for uplifting any cocktail.
          </Text>
          <Text size={12} style={styles.footer}>
            Ideal with citrus, salty, bitter and sweet flavours.
          </Text>
        </View>
      </View>
      <View style={[styles.sectionLarge, styles.fondo_color]}>
        <Image
          source={require('../../../assets/images/botellas/12/trago.png')}
          style={styles.trago}
          resizeMode="stretch"
        />
        <View style={styles.botella_container}>
          <Image
            source={require('../../../assets/images/botellas/12/botella.png')}
            style={styles.botella}
            resizeMode="stretch"
          />
        </View>
        <View style={{ ...styles.hashtag_container, ...styles.fondo_color2 }}>
          <Text size={10} style={styles.hashtag_titulo}>
            #MAKE<Text size={10} style={styles.hashtag_medium}>IT</Text>RONTASTIC
          </Text>
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
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
  bgImage: {
    width,
    minWidth: width,
  },
  fondo_color: {
    backgroundColor: '#00B8B0',
  },
  fondo_color2: {
    backgroundColor: '#fff',
  },
  fondo: {
    width,
    minWidth: width,
    marginTop: '40%',
    position: 'absolute'
  },
  cover: {
    width,
    height: '10%',
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
    width: '60%',
    height: '30%',
    marginTop: '35%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  divider: {
    width: '70%',
    height: '0.5%',
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  divider2: {
    width: '70%',
    height: '0.5%',
    marginTop: '5%',
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
    minHeight: height + 70,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  trago: {
    width,
    height: '40%'
  },
  botella: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '100%',
  },
  botella_container: {
    width,
    height: '60%',
    padding: 30,
  },
  hashtag_container: {
    height: '15%',
    backgroundColor: '#fff',
    paddingTop: '5%',
    width: '100%',
  },
  hashtag: {
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '25%',
  },
  hashtag_titulo: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: fonts.primarySemiBold,
    fontSize: 22,
    fontWeight: "normal",
    color: '#000000'
  },
  hashtag_medium: {
    fontFamily: fonts.primarySemiBold,
    fontSize: 14,
    color: '#000000'
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
    color: colors.black,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 11,
    width: '100%',
    height: 'auto'
  },
  titulo: {
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    color: colors.black,
    fontSize: 12,
    marginTop: 15,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  titulo1: {
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    color: colors.black,
    fontSize: 12,
    marginTop: 10,
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
    color: colors.black,
    fontSize: 10,
    width: '80%',
  },
  footer_title: {
    fontFamily: fonts.primaryRegular,
    color: colors.primaryLight,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 13,
    textAlign: 'center',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  footer: {
    fontFamily: fonts.primaryRegular,
    color: colors.black,
    textAlign: 'center',
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

