import React from 'react';
import {
  Button, Image, ImageBackground, StyleSheet,
  View
} from 'react-native';
import DatePicker from 'react-native-date-picker';

import { Text } from '../../components/StyledText';
import { colors, fonts } from '../../styles';



export default function SelectAgeScreen({ firstTime, setFirstTime, date, setDate }) {

  const minDate = `${date.getFullYear() - 200}-01-01`;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode="stretch"
      >
        <Text style={{ ...styles.text, marginTop: 'auto' }}>THERE IS AN AGE TO ENJOY THE RUNTASTIC LIFE</Text>
        <Text style={{ ...styles.text }}>WHAT'S YOURS?</Text>
        <DatePicker
          date={date}
          maximumDate={date}
          minimumDate={new Date(minDate)}
          style={{ marginLeft: 'auto', marginRight: 'auto', marginVertical: 20 }}
          onDateChange={setDate}
          mode='date'
        />
        <View style={styles.buttonsContainer}>
          <Button
            title="accept"
            loading={false}
            size='lg'
            loadingProps={{ size: 'large', color: 'white' }}
            buttonStyle={{
              backgroundColor: 'rgba(111, 202, 186, 1)',
              borderRadius: 5,
              ...styles.button
            }}
            titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
            containerStyle={{
              paddingHorizontal: 50,
              height: 50,
              marginVertical: 10,
            }}
            disabled={!firstTime}
            onPress={() => setFirstTime(false)}
          />
        </View>
        <Text style={{ ...styles.mini_text }}>Esta app usa Cookies. Politica de cookies.</Text>
        <Text style={{ ...styles.mini_text }}>Acepto los terminos de uso y la politica de privacidad</Text>
        <Text style={{ ...styles.mini_text, marginBottom: 'auto' }}>Esta informacion no sera utilizada para fines de mercadeo</Text>
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
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  bgImage: {
    flex: 1,
    marginHorizontal: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    padding: 5
  },
  instructions: {
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    borderBottomColor: colors.primary,
  },
  text: {
    color: colors.white,
    fontFamily: fonts.primarySemiBold,
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 50
  },
  mini_text: {
    color: colors.bluish,
    fontFamily: fonts.primaryRegular,
    textAlign: 'center',
    fontSize: 12,
    marginHorizontal: 50
  },
  barra: {
    position: 'absolute',
    bottom: 0,
    width: '184%',
    height: 28
  },
});
