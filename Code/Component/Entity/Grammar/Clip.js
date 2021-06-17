import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Clipboard from 'react-native-advanced-clipboard';
import {handlePress} from './Translate';
import Result from './Result';
let CLIP;
let TLS = [];
export default class Clip extends Component {
  constructor(props) {
    super(props);
    CLIP = this;
    this.state = {
      ok: false,
    };
  }
  ok() {
    this.setState({ok: true});
  }
  async _getContent() {
    return await Clipboard.getContent();
  }
  des = async (content) => {
    await fetch('http://192.168.1.241:5000/post/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: content,
    })
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        console.log(text);
        this.cut(text);
        return text;
      });
  };
  cut(set) {
    let list = set.split('!');
    this.translate(list);
  }
  translate = (list) => {
    console.log(list);
    for (let i = 0; i < list.length - 1; i++) {
      setTimeout(function () {
        let tuple = list[i];
        let word = tuple.split('@')[0];
        let NER = tuple.split('@')[1];
        if (NER === 'N' || NER === 'V' || NER === 'A') {
          handlePress(word).then((result) => {
            if (
              result ===
              '<div >  探している単語は tratu.soha.vn にありません </div>'
            ) {
            } else {
              let res = {
                result: result,
                word: word,
                NER: NER,
              };
              TLS.push(res);
              CLIP.ok();
            }
          });
        }
      }, 1000);
    }
    return TLS;
  };
  componentDidMount() {
    console.log(2);
    this._getContent().then((content) => {
      this.des(content.text).then((text) => {});
    });
  }

  render() {
    if (this.state.ok) {
      return TLS.map((value, index) => {
        return <Result word={value.word} result={value.result} />;
      });
    } else {
      return (
        <View>
          <Text />
        </View>
      );
    }
  }
}
