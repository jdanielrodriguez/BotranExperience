import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';



export default function InstructionsScreen({ isExtended, setIsExtended }) {
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
        source={require('../../../assets/images/nosotros-background-simple.png')}
        style={styles.bgImage}
        resizeMode="stretch"
      >

        <View style={[styles.section, styles.sectionLarge]}>
          <Text color="#19e7f7" hCenter size={15} style={styles.description}>
            {' '}
          </Text>
          <Image
            source={require('../../../assets/images/bottles.png')}
            style={styles.bottles}
            resizeMode="stretch"
          />
          <View style={styles.priceContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Text white size={25} style={styles.title}>
                HOW TO ENJOY THIS EXPERIENCE.
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text white size={15} style={styles.instructions}>
                Point your mobile front camera to the front label of any Botran No.12. No. 15. or No. 18. bottle.
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text white size={12} style={styles.instructions}>
                Tap to start the experience.
                {`\n`}
                Tap to advance to each step of the process.
              </Text>
            </View>
            <TouchableOpacity
              style={styles.priceLink}
            >
              <Image
                source={require('../../../assets/images/go-it-button.png')}
                style={styles.gotIt}
                resizeMode="stretch"
              />
            </TouchableOpacity>
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
    height: 40,
    marginTop: 15,
  },
  bottles: {
    width: '100%',
    height: '50%',
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
    paddingHorizontal: '10%'
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
    paddingHorizontal: '10%',
    fontWeight: 'normal',
    fontSize: 14,
    fontFamily: fonts.primarySemiBold,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
});
