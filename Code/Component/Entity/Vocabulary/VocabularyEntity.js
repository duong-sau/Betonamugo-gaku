import React, {Component, isValidElement} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Text,
  Footer,
  FooterTab,
  Badge,
  Content,
} from 'native-base';
import firebase from '@react-native-firebase/app';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Tts from 'react-native-tts';
import Swiper from 'react-native-swiper';
import Logout from '../../Template/Logout';
import {Sync} from '../../Firebase/Sync';
let VocabularyList = [];
let key;
let V;
export default class VocabularyEntity extends Component {
  constructor(props) {
    super(props);
    V = this;
    this.state = {finish: false};
    console.log('123456');
    console.log(props);
    this.loadFromDataBase();
  }
  handleClick(id) {
    let unfrozenObj = JSON.parse(JSON.stringify(global.user));
    unfrozenObj.vocabularyAchievement[key][id] = 1;
    global.user = unfrozenObj;
    Sync();
    this.setState({finish: !this.state.finish});
  }

  loadFromDataBase() {
    try {
      key = this.props.navigation.state.params.key.toString();
      let q1 = firebase.database().ref('Vocabulary/' + key + '/VocabularyList');
      q1.on('value', (datasnap) => {
        VocabularyList = datasnap.val();
        console.log(VocabularyList);
        if (VocabularyList != null) {
          console.log(VocabularyList);
          this.setState({finish: true});
        }
      });
      return;
    } catch (e) {
      console.log('err');
    }
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon
              name="chevron-left"
              color="white"
              size={20}
              style={{marginLeft: 10}}
              onPress={() => this.props.navigation.navigate('Vocabulary')}
            />
          </Left>
          <Body>
            <Title>Vocabulary</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={{display: 'flex', flexDirection: 'row', height: 500}}>
            <Swiper>
              {VocabularyList.map((items, index) => (
                <Word
                  show={global.user.vocabularyAchievement[key][index] != 1}
                  items={items}
                  index={index}
                  key={index}
                />
              ))}
            </Swiper>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button
              badge
              vertical
              onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="home" size={20} color="white" />
              <Text>Home</Text>
            </Button>
            <Button
              vertical
              onPress={() => this.props.navigation.navigate('Grammar')}>
              <Icon name="address-book" size={20} color="white" />
              <Text>Grammar</Text>
            </Button>
            <Button
              vertical
              onPress={() => {
                this.props.navigation.navigate('Setting');
              }}>
              <Icon name="cogs" size={20} color="white" />
              <Text>Setting</Text>
            </Button>
            <Button badge vertical>
              <Logout
                nameIcon="power-off"
                sizeIcon={20}
                colorIcon="white"
                text="Log out"
                displayImage="none"
                displayText="none"
                width={60}
                height={50}
              />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export class Word extends Component {
  render() {
    if (this.props.show) {
      let index = this.props.index;
      let items = this.props.items;
      return (
        <View
          style={{
            width: 250,
            height: 250,
            backgroundColor: '#0066CC',
            marginTop: 150,
            borderRadius: 15,
            display: 'flex',
            alignItems: 'center',
            marginLeft: 80,
          }}
          key={index}>
          <Icon
            name="volume-up"
            size={30}
            color="white"
            style={{marginTop: 30}}
            onPress={() => {
              Tts.speak(items.jp);
            }}
          />
          <Text style={{marginTop: 20, color: 'white', fontSize: 25}}>
            {items.jp}
          </Text>
          <Text style={{marginTop: 20, color: '#00FF00', fontSize: 20}}>
            {items.mean}
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 20,
            }}>
            <Icon
              name="check-square"
              size={25}
              onPress={() => V.handleClick(index)}
              color={
                global.user.vocabularyAchievement[key][index] == 1
                  ? 'red'
                  : 'white'
              }
            />
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 150,
            }}>
            <Icon name="check" color="green" size={120} />
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 25}}>
                Đã ghi nhớ!!!
              </Text>
            </View>
          </View>
        </View>
      );
    }
  }
}
