import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../Template/Header';
const correct = '正解の総数                                   ';
const unCorrect = '誤検知の総数                               ';
const unfinished = '未払いの文の総数                      ';
let R;
export default class Result extends Component {
  constructor(props) {
    super(props);
    R = this;
  }

  render() {
    return (
      <View style={styles.style}>
        <Header
          navigation={this.props.navigation}
          title={this.props.route.params.title}
          type={'bars'}
        />
        <View>
          <Text style={styles.result}>
            {correct} {this.props.route.params.correct}
          </Text>
          <Text style={styles.result}>
            {unCorrect} {this.props.route.params.unCorrect}
          </Text>
          <Text style={styles.result}>
            {unfinished} {this.props.route.params.unfinished}
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={global.style.ButtonStyle}>
            <TouchableOpacity
              style={global.style.ButtonBackgroundStyle}
              onPress={() => {
                this.props.navigation.navigate('Practice', {
                  title: this.props.route.params.title,
                  key: this.props.route.params.key,
                });
              }}>
              <Text style={global.style.ButtonStyle}>戻る</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.fbbut2}>
            <TouchableOpacity
              style={global.style.ButtonBackgroundStyle}
              onPress={() => {
                this.props.navigation.navigate('Grammar');
              }}>
              <Text style={global.style.ButtonStyle}>続く</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  result: {
    fontSize: 20,
    marginLeft: 40,
    marginTop: 20,
    paddingBottom: 10,
    borderColor: 'green',
    borderBottomWidth: 1,
    width: 330,
  },

  footer: {
    marginRight: 25,
    marginLeft: 25,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 50,
  },
});
