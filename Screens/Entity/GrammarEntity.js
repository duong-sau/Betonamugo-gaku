import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
let VocabularyList = [];
import Header from '../../Template/Header';
import firebase from '@react-native-firebase/app';
import Tts from 'react-native-tts';
import Carousel from 'react-native-snap-carousel';
Tts.setDefaultLanguage('vi-vn');
let V;
export default class GrammarEntity extends Component {
  loadFromDataBase = async () => {
    try {
      let q1 = firebase
        .database()
        .ref('Vocabulary/' + this.props.route.params.key + '/VocabularyList');
      q1.on('value', (datasnap) => {
        VocabularyList = datasnap.val();
        console.log(VocabularyList);
        if (VocabularyList != null) {
          this.setState({repaint: 1});
        }
      });
    } catch (e) {}
  };

  constructor(props) {
    super(props);
    V = this;
    this.state = {repaint: 0};
    this.loadFromDataBase();
  }

  speech(content) {
    Tts.stop();
    console.log('speech');
    Tts.speak(content);
  }
  _renderItem({item, index}) {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}>
        <TouchableOpacity
          onPress={() => {
            V.speech(item.mean);
          }}>
          <Text style={{fontSize: 30}}>{' ' + item.mean}:{' ' + item.word}</Text>
          <Text style={{fontSize: 15}}>{'\n' + item.explain}</Text>
          <Text style={{fontSize: 30}}>{item.jp}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.style}>
        <View style={styles.titleFrame}>
          <Header
            title={this.props.route.params.title}
            navigation={this.props.navigation}
            type={'chevron-left'}
          />
        </View>
        <SafeAreaView style={{flex: 1, paddingTop: 50}}>
          <View
            style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <Carousel
              layout={'default'}
              ref={(ref) => (this.carousel = ref)}
              data={VocabularyList}
              sliderWidth={400}
              itemWidth={400}
              renderItem={this._renderItem}
              onSnapToItem={(index) => this.setState({activeIndex: index})}
            />
          </View>
        </SafeAreaView>
        <TouchableOpacity
          style={global.style.ButtonBackgroundStyle}
          onPress={() => {
            this.props.navigation.replace('Practice', {
              title: this.props.route.params.title,
              key: this.props.route.params.key,
            });
          }}>
          <Text style={global.style.ButtonStyle}>練習</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  style: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 10,
  },
  footerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  titleFrame: {
    width: '100%',
    height: '8%',
    backgroundColor: 'rgb(60,179,113)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 25,

    marginLeft: 20,
  },
  submit_button: {
    elevation: 8,
    backgroundColor: 'rgb(0,191,255)',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft: 60,
    marginTop: 20,
    marginBottom: 50,
    width: '70%',
  },
});
