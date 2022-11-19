import React from 'react';
import {
  Dimensions, Image, Text,
  ScrollView, StyleSheet, View
} from 'react-native';

import { fonts, colors } from '../../styles';



export default function AboutScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={[styles.sectionLarge]}>
        <Image
          source={require('../../../assets/images/botellas/instructions/fondo1.png')}
          style={styles.fondo}
          resizeMode="stretch"
        />
        <View style={{ ...styles.section, height: '20%', marginTop: '5%', marginBottom: '5%' }}>
          <Image
            source={require('../../../assets/images/botellas/instructions/logo.png')}
            style={{ ...styles.logo, marginTop: 40 }}
            resizeMode="stretch"
          />
        </View>
        <View style={{ ...styles.section, height: '50%', marginBottom: '10%' }}>
          <View style={{ ...styles.container2, height: '100%', width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
            <View style={{ display: 'flex', height: '100%', width: '75%', marginLeft: 'auto', marginRight: 'auto' }}>
              <Text size={12} style={{ ...styles.option }}>
                Founded in 1940 bi five brothers. Venancio, Andres, Jesus, Felipe and Alejandro Botran when the family emigrated to Guatemala from Burgos Spain
              </Text>
              <Text size={12} style={{ ...styles.option, marginBottom: 'auto' }}>
                Botran Rum is a Guatemalan Single Estate Rum with Protected Designation of Origin "Ron de Guatemala"
              </Text>
              <Text size={12} style={{ ...styles.option, marginBottom: 'auto' }}>
                Cultivated, harvested, destilied, aged and bottled in Guatemala.
              </Text>
              <Text size={12} style={{ ...styles.option, marginBottom: 'auto' }}>
                ISCC (International Sustainability & Carbon Certification) designated Ron Botran as the world's first sustainable rum across every part of the rum journey
              </Text>
              <Text size={12} style={{ ...styles.option, marginBottom: 'auto' }}>
                SGS Carbon Neutral Vertification with +1.8 Million trees planted and grown since 1977.
              </Text>
            </View>
          </View>
        </View>
        <View style={{ ...styles.section, height: '20%' }}>
          <Image
            source={require('../../../assets/images/botellas/instructions/fotos.png')}
            style={{ ...styles.foto1, marginTop: 0, marginBottom: 'auto' }}
            resizeMode="stretch"
          />
        </View>
      </View>
      <View style={[styles.sectionLarge, styles.fondo_color]}>
        <Image
          source={require('../../../assets/images/botellas/instructions/fondo2.png')}
          style={styles.fondo}
          resizeMode="stretch"
        />
        <View style={{ ...styles.section, height: '100%' }}>
          <View style={{ ...styles.container2, height: '60%' }}>
            <View style={{ height: '100%', width: '70%', marginRight: 'auto', marginLeft: 'auto', marginTop: '10%' }}>
              <Text size={12} style={{ ...styles.tituloOption, marginTop: '10%' }}>
                SUGARCANE
              </Text>
              <Text size={12} style={{ ...styles.textoOption }}>
                Botran is produced from the first press of sugarcane (types: Chapina and La Preciosa) harvested from November to May in the fields of Retalhuleu.
              </Text>
              <Text size={12} style={{ ...styles.tituloOption }}>
                SLOW FERMENTATION
              </Text>
              <Text size={12} style={{ ...styles.textoOption }}>
                100 - 120 hours slow, discontinuous, batch-controlled fermentation.
              </Text>
              <Text size={12} style={{ ...styles.tituloOption }}>
                DISTILLED
              </Text>
              <Text size={12} style={{ ...styles.textoOption }}>
                In copper-sectioned stills.
              </Text>
              <Text size={12} style={{ ...styles.tituloOption }}>
                HIGH-ALTITUDE AGEING
              </Text>
              <Text size={12} style={{ ...styles.textoOption }}>
                aged in the mountains of Quetzaltenango at 2300 meters (7545 feet) above sea level.
              </Text>
              <Text size={12} style={{ ...styles.tituloOption }}>
                PROPIETARY DYNAMIC
              </Text>
              <Text size={12} style={{ ...styles.textoOption }}>
                AGEING SYSYEM (Adapted Solera)
              </Text>
              <Text size={12} style={{ ...styles.tituloOption }}>
                THREE MASTER BLENDERS
              </Text>
              <Text size={12} style={{ ...styles.textoOption }}>
                That work in concert with one another: Magda Lopez, Yarmin Chapeton, Leslie Taracena.
              </Text>
            </View>
          </View>
          <View style={{ ...styles.etiqueta_container, height: '20%' }}>
            <Image
              source={require('../../../assets/images/botellas/instructions/etiqueta.png')}
              style={styles.etiqueta}
              resizeMode="stretch"
            />
          </View>
          <View style={{ ...styles.container2, height: '20%' }}>
            <Image
              source={require('../../../assets/images/botellas/instructions/logo_1.png')}
              style={styles.logo1}
              resizeMode="stretch"
            />
            <Image
              source={require('../../../assets/images/botellas/instructions/logo_2.png')}
              style={styles.logo2}
              resizeMode="stretch"
            />
            <Image
              source={require('../../../assets/images/botellas/instructions/logo_3.png')}
              style={styles.logo3}
              resizeMode="stretch"
            />
            <Image
              source={require('../../../assets/images/botellas/instructions/logo_4.png')}
              style={styles.logo4}
              resizeMode="stretch"
            />
          </View>
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
    height: '100%',
    position: 'absolute',
    top: 0
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
    height: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  logo1: {
    width: '30%',
    height: '70%',
    marginLeft: 'auto',
  },
  logo2: {
    width: '20%',
    height: '60%',
    marginLeft: 10,
    marginTop: 5,
  },
  logo3: {
    width: '20%',
    height: '60%',
    marginLeft: 10,
    marginTop: 5,
  },
  logo4: {
    width: '10%',
    height: '45%',
    marginLeft: 25,
    marginTop: 12,
    marginRight: 'auto',
  },
  blend: {
    width: '50%',
    height: '30%',
    marginTop: 50,
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
  foto1: {
    width: '100%',
    height: '100%',
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
    minHeight: height,
  },
  trago: {
    width,
    height: '50%'
  },
  etiqueta: {
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '130%',
    marginTop: '-15%'
  },
  etiqueta_container: {
    width,
    height: '25%',
  },
  hashtag_container: {
    height: '10%',
    width: '100%',
  },
  hashtag: {
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
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
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
    width: '100%',
    height: 'auto'
  },
  titulo: {
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    color: colors.black,
    marginTop: 20,
    fontSize: 12,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  titulo1: {
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    color: colors.black,
    fontSize: 12,
    marginTop: 5,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  tituloOption: {
    fontFamily: fonts.primaryRegular,
    textAlign: 'center',
    color: colors.black,
    marginTop: 10,
    fontSize: 18,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  textoOption: {
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    color: colors.black,
    fontSize: 14,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  footer_title: {
    fontFamily: fonts.primaryRegular,
    color: colors.white,
    marginTop: 10,
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
