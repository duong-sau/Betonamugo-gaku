import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Container, Content} from 'native-base';
import HtmlView from 'react-native-htmlview';
import DOMParser from 'react-native-html-parser';
import XMLSerializer from 'react-native-html-parser';
import {styleTemplate} from '../../Template/StackNavigator';
import {Header} from '../../Template/Header';

let text = '';
export default class Translate extends Component {
  constructor(props) {
    super(props);
    global.navigation = this.props.navigation;
    this.state = {
      res: '',
      ok: false,
      value: '',
    };
  }
  static propTypes = {};
  ok(value) {
    this.setState({
      value: value,
      ok: true,
    });
  }
  componentDidMount() {}
  handlePress = async (text) => {
    let res = '';
    text = text[0].toUpperCase() + text.substring(1);
    text = text.replace(/ /g, '_');
    let input = 'http://tratu.soha.vn/dict/vn_jp/' + text;
    console.log(input);
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
        let result = parsed.getElementsByAttribute('id', 'content-3');
        res = XML.serializeToString(result['0']);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        res = '<div >  探している単語は tratu.soha.vn にありません </div>';
      });
    return res;
  };

  render() {
    return (
      <Container>
        <Header image={require('../../image/dic.jpg')} />
        <Content>
          <View>
            <Text style={styleTemplate.ContentStyle}>
              http://tratu.soha.vn 専門用語を検索する
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextInput
                style={styles.input}
                onChangeText={(t) => {
                  text = t;
                }}
              />
              <TouchableOpacity
                style={styleTemplate.ButtonBackgroundStyle}
                onPress={() => {
                  this.handlePress(text).then((out) => {
                    this.ok(out);
                    console.log('out');
                    console.log(out);
                  });
                }}>
                <Text style={styleTemplate.ButtonStyle}>翻訳</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Res ok={this.state.ok} value={this.state.value} />
        </Content>
      </Container>
    );
  }
}

export class Res extends Component {
  render() {
    if (this.props.ok === true) {
      return (
        <View>
          <View>
            <Text>{'    結果による翻訳'}</Text>
          </View>
          <ScrollView>
            <HtmlView
              value={this.props.value}
              stylesheet={{width: 50, height: 50}}
            />
          </ScrollView>
        </View>
      );
    } else {
      return <View />;
    }
  }
}
const styles = StyleSheet.create({
  input: {
    width: '55%',
    height: 50,
    margin: 12,
    borderWidth: 1,
  },
});
