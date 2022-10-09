import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Platform, StyleSheet, Text, Button, View, Alert } from 'react-native';
import { colors } from '../../styles';

import tabNavigationData from './tabNavigationData';

const Tab = createBottomTabNavigator();
const MyTabBar = ({ navigation }) => (
  <View style={styles.fixToText}>
    {tabNavigationData.map((item, idx) => (
      <Button
        title={item.name}
        onPress={() => {
          // Navigate using the `navigation` prop that you received
          navigation.navigate(item.name);
        }}
      />
    ))}
  </View>
)

export default function BottomTabs() {
  return (
    <Tab.Navigator tabBarOptions={{ style: { height: 0 } }} tabBar={props => <MyTabBar {...props} />}>
      {tabNavigationData.map((item, idx) => (
        <Tab.Screen
          key={`tab_item${idx + 1}`}
          name={item.name}
          component={item.component}
          
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.white,
    paddingHorizontal: 10,
    bottom: Platform.OS === 'ios' ? -5 : 0,
  },
  tabBarIcon: {
    width: 23,
    height: 23,
  },
  fixToText: {
    flexDirection: 'row',
    height: 50,
  },
  tabBarIconFocused: {
    tintColor: colors.primary,
  },
});
