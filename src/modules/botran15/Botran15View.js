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
            source={require('../../../assets/images/title-ron-15.png')}
            style={styles.title15}
            resizeMode="stretch"
          />
          <Image
            source={require('../../../assets/images/botella-botran-15.png')}
            style={styles.bottles}
            resizeMode="stretch"
          />
          <View style={styles.priceContainer}>
            <View style={{ flexDirection: 'row' }}>
              <ScrollView style={styles.scrollView}>
                <Text white size={12} style={styles.instructions}>
                  Each of our blends shows you diferent side of Guatemala.
                  Each of our blends shows you diferent side of Guatemala.
                  Each of our blends shows you diferent side of Guatemala.
                  Each of our blends shows you diferent side of Guatemala.
                  Each of our blends shows you diferent side of Guatemala.
                  Each of our blends shows you diferent side of Guatemala.
                  Each of our blends shows you diferent side of Guatemala.
                  Each of our blends shows you diferent side of Guatemala.
                  Each of our blends shows you diferent side of Guatemala.
                  Each of our blends shows you diferent side of Guatemala.
                  Each of our blends shows you diferent side of Guatemala.
                  Each of our blends shows you diferent side of Guatemala.
                  Each of our blends shows you diferent side of Guatemala.
                  Each of our blends shows you diferent side of Guatemala.
                  Each of our blends shows you diferent side of Guatemala.
                  Each of our blends shows you diferent side of Guatemala.
                  Each of our blends shows you diferent side of Guatemala.
                  Each of our blends shows you diferent side of Guatemala.
                  Each of our blends shows you diferent side of Guatemala.
                  Each of our blends shows you diferent side of Guatemala.
                  Each of our blends shows you diferent side of Guatemala.
                  Each of our blends shows you diferent side of Guatemala.
                  Each of our blends shows you diferent side of Guatemala.
                  Each of our blends shows you diferent side of Guatemala.
                </Text>
              </ScrollView>
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
  scrollView: {
    width: '100%',
  },
  gotIt: {
    width: 100,
    height: 50,
    marginTop: 15,
  },
  bottles: {
    width: '50%',
    height: '65%',
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
