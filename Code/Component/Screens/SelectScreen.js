import React, {Component} from 'react';
import {Text} from 'native-base';
import {TouchableOpacity, Image, StyleSheet, View} from 'react-native';
import {BackgroundImage} from 'react-native-elements/dist/config';
class SelectItem extends Component {
  render() {
    return (
      <TouchableOpacity
        style={style.selectItem}
        onPress={() => global.navigation.navigate(this.props.destination)}>
        <Image style={style.image} source={this.props.image} />
        <Text style={style.selectText}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default class Select extends Component {
  constructor(props) {
    super(props);
    global.navigation = this.props.navigation;
  }
  render() {
    console.log(this.props);
    return (
      <View style={{backgroundColor: '#e5e5e5'}}>
        <BackgroundImage
          source={require('../Screens/Header.png')}
          style={{width: '100%'}}>
          <Text style={style.selectText}>ベトナム語をベトナム語で学ぶ</Text>
        </BackgroundImage>
        <View style={{height: 600}}>
          <SelectItem
            image={require('../image/dictionary.png')}
            title={'翻訳する'}
            destination={'Translate'}
          />
          <SelectItem
            image={require('../image/vocabulary.jpeg')}
            title={'単語'}
            destination={'Vocabulary'}
          />
          <SelectItem
            image={require('../image/TK.png')}
            title={'統計'}
            destination={'Result'}
          />
          <SelectItem
            image={require('../image/privacy.jpg')}
            title={'利用規約'}
            destination={'About'}
          />
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  selectItem: {
    flex: 1,
    margin: '1%',
    borderWidth: 2,
    borderColor: 'black',
  },
  selectText: {
    width: 300,
    alignSelf: 'center',
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: '10%',
  },
  image: {
    marginTop: '3%',
    width: '98%',
    height: '72%',
    marginLeft: '1%',
  },
});
