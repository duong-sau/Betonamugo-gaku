import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HtmlView from 'react-native-htmlview';

export default class Result extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={style.view}>
        <Text style={style.text}>{this.props.word}</Text>
        <HtmlView value={this.props.result} />
      </View>
    );
  }
}
const style = StyleSheet.create({
  view: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  text: {
    color: 'blue',
    fontSize: 18,
    fontWeight: '900',
  },
});
