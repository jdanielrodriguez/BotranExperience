import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
} from 'react-native';

import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';



export default function Botran15Screen({ isExtended, setIsExtended }) {
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
              <Text white bold size={12} style={styles.instructions}>
                Each of our blends shows you diferent side of Guatemala.
              </Text>
            </View>
          </View>
        </View>
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
    fontWeight: 'bold',
    fontFamily: fonts.primarySemiBold,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
});
