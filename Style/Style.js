import {StyleSheet} from 'react-native';
import React, {Component} from 'react';
import LoginController from '../Screens/Controller/LoginController';

export default class Style extends Component {
  render() {
    return <LoginController />;
  }
}
global.style = StyleSheet.create({
  TemplateStyle: {
    backgroundColor: '#4267b2',
  },
  HeaderStyle: {
    fontSize: 24,
    width: '100%',
    height: 55,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4267b2',
  },
  ContentStyle: {
    fontSize: 16,
    marginLeft: -10,
    marginTop: 10,
    color: '#a0a0a0',
    alignSelf: 'center',
  },
  ContentBackgroundStyle: {
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  ButtonBackgroundStyle: {
    backgroundColor: '#4267b2',
    borderRadius: 5,
    height: 60,
    width: 150,
    padding: 8,
  },
  ButtonStyle: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  CenterContentStyle: {
    alignItems: 'center',
  },
});
