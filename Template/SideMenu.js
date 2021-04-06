import React, {Component} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import VocabularyController from '../Screens/Controller/VocabularyController';
import TSL from '../Screens/Controller/TSL';
import Login from '../Screens/Login';
import About from '../Screens/About';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import GrammarController from '../Screens/Controller/GrammarController';

function fox() {
  return (
    <View>
      <Image
        style={{
          width: 80,
          height: 80,
          borderRadius: 80,
          marginLeft: 90,
          marginTop: 50,
        }}
        source={{uri: global.userPicture}}
      />
      <View style={{width: 160, marginLeft: 50}}>
        <Text
          style={{
            marginTop: 10,
            color: 'white',
            fontSize: 17,
            fontWeight: 'bold',
          }}>
          {global.userName}
        </Text>
      </View>
    </View>
  );
}
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView
      style={{backgroundColor: 'white', color: 'red'}}
      {...props}>
      <DrawerItem
        label={() => fox()}
        style={{
          height: 200,
          width: 500,
          marginTop: -50,
          marginLeft: 0,
          backgroundColor: '#4267b2',
        }}
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <View style={styles.List}>
        <Catalog name={'単語'} target={0} icon={'bookmark'} />
        <Catalog name={'辞書'} target={1} icon={'book'} />
        <Catalog name={'規約紹介'} target={2} icon={'user'} />
        <Catalog name={'ユーザー'} target={3} icon={'user-circle'} />
      </View>
    </DrawerContentScrollView>
  );
}
export class Catalog extends Component {
  render() {
    return (
      <View
        style={{
          height: 80,
          paddingLeft: 20,
          borderBottomWidth: 2,
          borderColor: 'white',
        }}>
        <TouchableOpacity
          onPress={() => {
            global.navigation.replace('SideMenu', {
              command: this.props.target,
            });
          }}>
          <View style={{display: 'flex', flexDirection: 'row', marginTop: 25}}>
            <Icon name={this.props.icon} size={30} color={'white'} />
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 15,
                marginTop: 0,
              }}>
              {this.props.name}
            </Text>
            <Icon
              name="chevron-right"
              size={15}
              color={'white'}
              style={{marginLeft: 130, marginTop: 5, opacity: 0.6}}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const Drawer = createDrawerNavigator();
export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    global.navigation = this.props.navigation;
    global.S = this;
  }
  render() {
    if (this.props.route.params.command === 0) {
      return (
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Grammar" component={GrammarController} />
          <Drawer.Screen name="Vocabulary" component={VocabularyController} />
          <Drawer.Screen name="About us" component={About} />
          <Drawer.Screen name="Log out" component={Login} />
        </Drawer.Navigator>
      );
    } else if (this.props.route.params.command === 1) {
      return (
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Vocabulary" component={TSL} />
          <Drawer.Screen name="Grammar" component={GrammarController} />
          <Drawer.Screen name="About us" component={About} />
          <Drawer.Screen name="Log out" component={Login} />
        </Drawer.Navigator>
      );
    } else if (this.props.route.params.command === 2) {
      return (
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="About us" component={About} />
          <Drawer.Screen name="Log out" component={Login} />
          <Drawer.Screen name="Grammar" component={GrammarController} />
          <Drawer.Screen name="Vocabulary" component={VocabularyController} />
        </Drawer.Navigator>
      );
    } else {
      return (
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Log out" component={Login} />
          <Drawer.Screen name="Grammar" component={GrammarController} />
          <Drawer.Screen name="Vocabulary" component={VocabularyController} />
          <Drawer.Screen name="About us" component={About} />
        </Drawer.Navigator>
      );
    }
  }
}

const styles = StyleSheet.create({
  List: {
    backgroundColor: '#4267b2',
    marginTop: -10,
    height: 800,
  },
});
