import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import StackNavigationData from './stackNavigationData';

const Stack = createStackNavigator();

export default function NavigatorView(props) {
  // if (authState.isLoggedIn || authState.hasSkippedLogin) {
  //     return <AppNavigator />;
  // }
  // return <AuthScreen />;

  const headerLeftComponentMenu = () => (
    <TouchableOpacity
      onPress={() => props.navigation.toggleDrawer()}
      style={{
          marginLeft: -40,
          marginTop: 20,
        }}
    >
      <Image
        source={require('../../../assets/images/menu.png')}
        resizeMode="contain"
        style={{
            height: 50,
          }}
      />
    </TouchableOpacity>    
    )

  return (
    <Stack.Navigator>
      {StackNavigationData.map((item, idx) => (
        <Stack.Screen
          key={`stack_item-${idx+1}`}
          name={item.name} 
          component={item.component} 
          style={styles.container}
          options={{
            headerLeft: item.headerLeft || headerLeftComponentMenu,
            headerTransparent: true,
            headerStyle: {
              backgroundColor: 'transparent',
              shadowColor: 'none',
              height: Header.height,
            },
            headerTitleStyle: item.headerTitleStyle,
          }} 
        />
      ))}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: `${100}%`,
    height: Header.height,
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 60 : 80,
  }
});
