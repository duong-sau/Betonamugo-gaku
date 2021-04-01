import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';

export default class GrammarContent extends Component {
  constructor({props}) {
    super(props);
  }
  render() {
    return <Text Style={styles.textTitle}>123456</Text>;
  }
}
const styles = StyleSheet.create({
  gra: {
    borderColor: 'green',
    borderWidth: 2,
    fontSize: 24,
    color: '#FFFFFF',
  },
  cot: {
    color: 'black',
    fontSize: 50,
  },
  exm: {
    borderColor: '#a5a5a5',
    borderWidth: 1,
    fontSize: 15,
    color: '#501500',
  },
  img: {
    fontSize: 80,
    color: 'blue',
  },
  textTitle: {
    color: 'black',
    fontSize: 30,
    marginTop: 50,
    marginLeft: 0,
    fontWeight: 'bold',
  },
});
