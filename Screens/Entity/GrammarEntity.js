import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
let VocabularyList = [];
import Header from '../../Template/Header';
import firebase from '@react-native-firebase/app';
import Tts from 'react-native-tts';
import DOMParser from 'react-native-html-parser';
import XMLSerializer from 'react-native-html-parser';
import HtmlView from 'react-native-htmlview';
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
        <FlatList
          data={VocabularyList}
          numColumns={1}
          renderItem={({item}) => (
            <View style={styles.style}>
              <TouchableOpacity
                onPress={() => {
                  this.speech(item.word);
                }}>
                <Text style={{width: 400, marginLeft: 20, fontSize: 20}}>
                  {item.word}: {item.mean}
                </Text>
                <Text>{item.jp}</Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    marginLeft: 20,
                    fontSize: 17,
                  }}>
                  {item.read}
                </Text>
                <Text style={{width: 410, marginLeft: 20, fontSize: 17}}>
                  {item.explain}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.word}
        />

        <TouchableOpacity
          style={styles.submit_button}
          onPress={() => {
            this.props.navigation.replace('Practice', {
              title: this.props.route.params.title,
              key: this.props.route.params.key,
            });
          }}>
          <Text style={styles.footerText}>Luyện Tập</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  style: {
    flex: 1,
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
