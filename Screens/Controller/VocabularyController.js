import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Vocabulary from '../Entity/Vocabulary';
import VocabularyEntity from '../Entity/VocabularyEntity';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
let V;
export default class VocabularyController extends Component {
  constructor(props) {
    super(props);
    V = this;
  }

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerTitle: () => (
              <Text style={{color: 'white', fontSize: 24, marginLeft: 0}}>
                VOCABULARY
              </Text>
            ),
            headerLeft: () => (
              <TouchableOpacity
                onPress={() =>
                  V.props.navigation.dispatch(DrawerActions.openDrawer())
                }>
                <Icon
                  name="bars"
                  color="white"
                  size={30}
                  style={{marginLeft: 20}}
                />
              </TouchableOpacity>
            ),
            headerTitleStyle: {fontSize: 24},
            headerStyle: {backgroundColor: 'rgb(60,179,113)'},
          }}
          name="VoCabularycontroller"
          component={Vocabulary}
        />
        <Stack.Screen
          options={{
            headerTitle: () => (
              <Text style={{color: 'white', fontSize: 24, marginLeft:-15}}>VOCABULARY</Text>
            ),
            headerLeft: () => (
              <TouchableOpacity
                onPress={() =>
                  global.L.props.navigation.replace('SideMenu', { command: 1 })
                }>
                <Icon
                  name="chevron-left"
                  color="white"
                  size={20}
                  style={{marginLeft: 20}}
                />
              </TouchableOpacity>
            ),
            headerTitleStyle: {fontSize: 24},
            headerStyle: {backgroundColor: 'rgb(60,179,113)'},
          }}
          name="Vocabulary"
          component={VocabularyEntity}
        />
      </Stack.Navigator>
    );
  }
}
