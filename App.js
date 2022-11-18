import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, LogBox, StyleSheet, View } from 'react-native';
import RNBootSplash from "react-native-bootsplash";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { colors } from './src/styles';

import { persistor, store } from './src/redux/store';

import AppView from './src/modules/AppViewContainer';

export default function App() {
  LogBox.ignoreLogs(['Warning: Async Storage has been extracted from react-native core']);
  return (
    <Provider store={store}>
      <NavigationContainer onReady={() => RNBootSplash.hide()}>
        <PersistGate
          loading={(
            <View style={styles.container}>
              <ActivityIndicator color={colors.red} />
            </View>
          )}
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
    backgroundColor: '#00B8B0',
  },
});
