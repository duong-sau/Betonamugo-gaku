import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Tts from 'react-native-tts';
import firebase from '@react-native-firebase/app';
import DOMParser from 'react-native-html-parser';
import XMLSerializer from 'react-native-html-parser';
import HtmlView from 'react-native-htmlview';
let VocabularyList;
let V;
export default class VocabularyEntity extends Component {
  state = {};
  trans = async (text) => {
    let res = '';
    text = text[0].toUpperCase() + text.substring(1);
    text = text.replace(/ /g, '_');
    let input = 'http://tratu.soha.vn/dict/en_jp/' + text;
    await fetch(input)
      .then(function (response) {
        // The API call was successful!
        return response.text();
      })
      .then(function (html) {
        // This is the HTML from our response as a text string
        const parser = new DOMParser.DOMParser();
        const XML = new XMLSerializer.XMLSerializer();
        const parsed = parser.parseFromString(html, 'text/html');

        let result = parsed.getElementsByAttribute('id', 'content-5');
        result = XML.serializeToString(result['0']);
        result = parser.parseFromString(result);
        //console.log(result.getElementsByClassName('mw-headline')['0'].firstChild.data,);
        //res = XML.serializeToString(result['0']);
        res = result.getElementsByClassName('mw-headline')['0'].firstChild.data;
      })
      .catch(function (err) {
        // There was an error
        console.log(err);
        res = '<div>探している単語は soha.com にありません</div>';
      });
    return res;
  };
  set() {
    try {
      let q1 = firebase
        .database()
        .ref('Vocabulary/' + this.props.route.params.key);
      q1.update({
        VocabularyList,
      });
    } catch (e) {
      console.log('err');
    }
  }
  loadFromDataBase() {
    try {
      let q1 = firebase
        .database()
        .ref('Vocabulary/' + this.props.route.params.key + '/VocabularyList');
      q1.on('value', (datasnap) => {
        VocabularyList = datasnap.val();
        console.log(VocabularyList);
        if (VocabularyList != null) {
          VocabularyList.forEach(function (item, index) {
            console.log(item.word);
            V.trans(item.word).then((res) => {
              if (item.jp == '探している単語は soha.com にありません') {
                console.log('tr');
                item.jp = res;
              }
            });
          });
          console.log('VOC');
          console.log(VocabularyList);
        }
        q1.off();
      });
      return;
    } catch (e) {
      console.log('err');
    }
  }
  constructor(props) {
    super(props);
    V = this;
    this.state = {repaint: 0};
    let i = 0;
    for (i = 0; i < 50; i++) {
      // Dòng lệnh xử lý vòng lặp
      this.loadFromDataBase();
      const delayInMilliseconds = 1000; //1 second

      setTimeout(function () {
        V.set();
        //your code to be executed after 1 second
      }, delayInMilliseconds);
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.set();
          }}>
          <Text>abc</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  style: {
    height: 110,
    marginTop: 1,
    backgroundColor: '#e5e5e5',
    borderColor: '#bbbbbb',
    borderWidth: 2,
    paddingTop: 10,
  },

  footerText: {
    color: 'rgb(0,191,255)	',
    fontWeight: 'bold',
    fontSize: 25,
    marginRight: 10,
    marginTop: 10,
  },
});
