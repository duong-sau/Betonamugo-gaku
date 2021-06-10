import React, {Component} from 'react';
import {Container, Header, Left, Body, Title, Text, Content} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
export default class Select extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <Container>
        <Header style={{backgroundColor: '#B299FF'}}>
          <Left style={{marginLeft: 5}}>
            <Icon name="chevron-left" color="white" size={20} />
          </Left>
          <Body style={{display: 'flex', flexDirection: 'row'}}>
            <Title style={{marginLeft: 10}}>English Breaking</Title>
            <Icon
              name="cogs"
              size={25}
              color="white"
              style={{marginLeft: 90}}
              onPress={() => this.props.navigation.navigate('Setting')}
            />
          </Body>
        </Header>
        <Content>
          <View style={{position: 'relative'}}>
            <Image
              style={{width: 420, height: 750}}
              source={require('../image/background.jpg')}
            />
            <View style={{position: 'absolute', top: 10, left: 0}}>
              <TouchableOpacity
                style={style.selectItem}
                onPress={() => this.props.navigation.navigate('Translate')}>
                <Image
                  style={style.image}
                  source={require('../image/dic.jpg')}
                />
                <Text style={style.selectText}>Dịch</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.selectItem}
                onPress={() => this.props.navigation.navigate('Vocabulary')}>
                <Image
                  style={style.image}
                  source={require('../image/vocabulary.jpeg')}
                />
                <Text style={style.selectText}>Từ mới</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.selectItem}
                onPress={() => {
                  this.props.navigation.navigate('About');
                }}>
                <Image
                  style={style.image}
                  source={require('../image/privacy.jpg')}
                />
                <Text style={style.selectText}>về chúng tôi</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.selectItem}
                onPress={() => this.props.navigation.navigate('Login')}>
                <Image
                  style={style.image}
                  source={require('../image/log.jpg')}
                />
                <Text style={style.selectText}>Đăng xuất</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
const style = StyleSheet.create({
  Container: {
    padding: '10%',
  },

  selectItem: {
    backgroundColor: 'white',
    height: '100%',
    width: 480,
    borderRadius: 0,
    padding: '1%',
    borderColor: 'red',
    borderWidth: 1,
  },
  selectText: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 0,
  },
  image: {
    width: '95%',
    height: '200%',
  },
});
