import { Provider } from 'react-redux';
import React from 'react';
import { View, ActivityIndicator, StyleSheet, LogBox } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from "react-native-bootsplash";
import { colors } from './src/styles';

import { store, persistor } from './src/redux/store';

import AppView from './src/modules/AppViewContainer';

export default function App() {
  LogBox.ignoreLogs(['Warning: Async Storage has been extracted from react-native core']);
  return (
    <Provider store={store}>
      <NavigationContainer onReady={() => RNBootSplash.hide()}>
        <PersistGate
          loading={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <View style={styles.container}>
              <ActivityIndicator color={colors.red} />
            </View>
          }
          persistor={persistor}
        >
          <AppView />
        </PersistGate>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#19e7f7',
  },
});
