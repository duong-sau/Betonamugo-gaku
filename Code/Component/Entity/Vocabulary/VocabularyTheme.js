import React, {Component} from 'react';
import {
  View,
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Content,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ListItem, Avatar} from 'react-native-elements';

import Tts from 'react-native-tts';
export default class Vocabulary extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const list = [
      {
        name: 'Greeting',
        avatar_url:
          'https://www.freevector.com/uploads/vector/preview/30975/WAVE_GREETINGS.jpg',
        subtitle: '/ˈɡriː.tɪŋ/',
        key: 'G2',
      },
      {
        name: 'Travel',
        avatar_url:
          'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f709d82fa4f131fa2114a74%2F0x0.jpg',
        subtitle: '/ˈtræv.əl/',
        key: 'G2',
      },
      {
        name: 'Music',
        avatar_url:
          'https://www.blhsnews.com/wp-content/uploads/2018/11/apple-music-note-800x420.jpg',
        subtitle: '/ˈmjuː.zɪk/',
        key: 'G3',
      },
      {
        name: 'Friend',
        avatar_url:
          'data:image/jpeg;base64,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',
        subtitle: '/frend/',
        key: 'G5',
      },
      {
        name: 'Earth',
        avatar_url:
          'https://media.npr.org/assets/img/2013/03/06/bluemarble3k-smaller-nasa_custom-644f0b7082d6d0f6814a9e82908569c07ea55ccb-s800-c85.jpg',
        subtitle: '/ɜːθ/',
        key: 'G1',
      },
      {
        name: 'Food',
        avatar_url:
          'https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg',
        subtitle: '/fuːd/',
        key: 'G6',
      },
      {
        name: 'Vehicle',
        avatar_url: 'https://i.ytimg.com/vi/MBZMTL9Q2RU/maxresdefault.jpg',
        subtitle: '/vɪə.kəl/',
        key: 'G7',
      },
      {
        name: 'Sport',
        avatar_url:
          'https://luyenthiielts.com/wp-content/uploads/2020/10/p18lq7ediepl816p6s04171vo23.jpg',
        subtitle: '/spɔːt/',
        key: 'G7',
      },
    ];
    return (
      <Container>
        <Header>
          <Left>
            <Icon
              name="chevron-left"
              color="white"
              size={20}
              style={{marginLeft: 10}}
              onPress={() => this.props.navigation.navigate('Home')}
            />
          </Left>
          <Body>
            <Title style={{marginLeft: 0}}>Vocabulary</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View>
            {list.map((l, i) => (
              <ListItem
                key={i}
                bottomDivider
                onPress={() => {
                  this.props.navigation.navigate('VocabularyEntity', {
                    key: l.key,
                  });
                }}>
                <Avatar
                  source={{uri: l.avatar_url}}
                  style={{width: 70, height: 70}}
                />
                <ListItem.Content>
                  <ListItem.Title style={{fontSize: 18}}>
                    {l.name}
                  </ListItem.Title>
                  <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
                <Icon
                  name="volume-up"
                  size={20}
                  onPress={() => {
                    Tts.speak(l.name);
                  }}
                />
              </ListItem>
            ))}
          </View>
        </Content>
      </Container>
    );
  }
}
