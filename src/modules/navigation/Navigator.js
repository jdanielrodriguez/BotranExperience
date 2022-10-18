import {
  createDrawerNavigator, DrawerContentScrollView, DrawerItem
} from '@react-navigation/drawer';
import * as React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { fonts } from '../../styles';
import NavigatorView from './RootNavigation';


const iconSettings = require('../../../assets/images/share.png');
const dividerBack = require('../../../assets/images/menu-divider.png')

const drawerData = [
  {
    name: 'START THE EXPERIENCE',
  },
  {
    name: 'ABOUT RON BOTRAN',
  },
  {
    name: 'BOTRAN NO.12',
  },
  {
    name: 'BOTRAN NO.15',
  },
  {
    name: 'BOTRAN NO.18',
  },
];

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <ImageBackground
      source={require('../../../assets/images/menu-background.png')}
      style={styles.bgImage}
      resizeMode="cover"
    >

      <TouchableOpacity
        onPress={() => props.navigation.toggleDrawer()}
        style={{
          marginTop: 10,
        }}
      >
        <Image
          source={require('../../../assets/images/Cerrar.png')}
          resizeMode="contain"
          style={{
            marginLeft: 210,
            height: 50,
            position: 'absolute'
          }}
        />
      </TouchableOpacity>
      <DrawerContentScrollView {...props} style={{ padding: 10 }}>
        {drawerData.map((item, idx) => (
          <React.Fragment key={`container-${idx + 1}`}>
            <DrawerItem
              key={`drawer_item-${idx + 1}`}
              label={() => (
                <View style={{ ...styles.menuLabelFlex, marginTop: 10, backgroundColor: '#004C48', padding: 5 }} key={`label_item-${idx + 1}`}>
                  <Text style={styles.menuTitle}>{item.name}</Text>
                </View>
              )}
              onPress={() => props.navigation.navigate(item.name)}
            />
            <View style={styles.divider} key={`view-image_item-${idx + 1}`}>
              <Image
                style={{ width: '80%', height: 12, marginLeft: 'auto', marginRight: 'auto' }}
                source={dividerBack}
                key={`image_item-${idx + 1}`}
              />
            </View>
          </React.Fragment>
        ))}
        <DrawerItem
          label={() => (
            <View style={{ ...styles.menuLabelFlex, backgroundColor: '#004C48', padding: 5 }}>
              <Text style={styles.menuTitle}>INSTRUCTIONS</Text>
            </View>
          )}
          onPress={() => props.navigation.navigate('INSTRUCTIONS')}
        />
        <DrawerItem
          label={() => (
            <View style={{ ...styles.menuLabelFlex, marginTop: 0 }}>
              <Image
                style={{ width: 35, height: 50, marginLeft: 'auto', marginRight: 'auto' }}
                source={iconSettings}
              />
            </View>
          )}
          onPress={() => props.navigation.navigate('Calendar')}
        />
      </DrawerContentScrollView>
    </ImageBackground>
  );
}

export default function App() {

  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#4CAFA3',
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Homes" component={NavigatorView} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  menuTitle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: fonts.primarySemiBold,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'normal',
    color: '#fff'
  },
  bgImage: {
    flex: 1,
    marginHorizontal: 0,
  },
  menuLabelFlex: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: 'normal',
    fontSize: 16,
    marginLeft: 15,
    fontFamily: fonts.primarySemiBold,
    marginRight: 15
  },
  userName: {
    color: '#fff',
    fontSize: 18
  },
  divider: {
    opacity: 0.9,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 20,
    marginBottom: 10
  },
});
