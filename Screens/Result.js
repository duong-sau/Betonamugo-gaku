import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
const correct = 'Số câu bạn đã làm đúng               ';
const unCorrect = 'Số câu bạn đã làm sai                   ';
const unfinished = 'Số câu bạn chưa làm                    ';
let R;
export default class Result extends Component {
  constructor(props) {
    super(props);
    R = this;
  }

  render() {
    return (
      <View style={styles.style}>
        <View style={styles.titleFrame}>
          <View style={styles.icons} />
          <Icon
            name="chevron-left"
            color="white"
            size={20}
            onPress={() => {
              this.props.navigation.replace('Grammar');
            }}
            style={{marginRight: 15}}
          />
          <Text style={styles.titleText}>{this.props.route.params.title}</Text>
        </View>
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
          <View style={styles.fbbut1}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Practice',{
                  title: this.props.route.params.title,
                  key: this.props.route.params.key
                });
              }}>
              <Text style={styles.buttitle}>TRỞ LẠI</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.fbbut2}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Grammar');
              }}>
              <Text style={styles.buttitle}>TIẾP THEO</Text>
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
  icons: {
    marginLeft: 15,
  },
  footer: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 50,
  },
  titleFrame: {
    width: '100%',
    height: '15%',
    backgroundColor: 'rgb(60,179,113)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 50,
  },
  titleText: {
    color: 'white',
    fontSize: 25,
    marginLeft: 10,
  },
  icon_bottom_left: {
    marginBottom: 150,
    marginLeft: 50,
  },
  buttitle: {
    fontSize: 24,
    color: '#FFFFFF',
    marginTop: 10,
  },
  fbbut1: {
    alignItems: 'center',
    width: '35%',
    height: '100%',
    borderRadius: 7,
    backgroundColor: 'rgb(60,179,113)',
    marginLeft: 37,
  },
  fbbut2: {
    alignItems: 'center',
    width: '35%',
    height: '100%',
    borderRadius: 7,
    backgroundColor: 'rgb(60,179,113)',
    marginRight: 40,
  },
});
