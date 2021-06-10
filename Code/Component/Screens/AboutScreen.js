import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
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
  Content,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logout from '../Template/Logout';
export default class About extends Component {
  constructor(props) {
    super(props);
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
              onPress={() => {
                this.props.navigation.navigate('Home');
              }}
            />
          </Left>
          <Body>
            <Title>Thông tin ứng dụng</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={{backgroundColor: 'white', height: 180}}>
            <View>
              <Image
                style={styles.image}
                source={require('../image/logo-app.png')}
              />
            </View>
            <View>
              <Text style={styles.content}>FOXENGLISH</Text>
            </View>
          </View>
          <View style={{backgroundColor: 'white', marginTop: 10}}>
            <View
              style={{
                backgroundColor: 'white',
                marginTop: 30,
                color: 'red',
                height: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#c0c0c0',
              }}>
              <Text style={{fontSize: 20, marginLeft: 20, marginTop: -17}}>
                Version 1.0
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                marginTop: 30,
                color: 'red',
                height: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#c0c0c0',
              }}>
              <Text style={{fontSize: 20, marginLeft: 20, marginTop: -17}}>
                Release year 2020
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                marginTop: 30,
                color: 'red',
                height: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#c0c0c0',
              }}>
              <Text style={{fontSize: 20, marginLeft: 20, marginTop: -17}}>
                Operating System Android
              </Text>
            </View>
          </View>
          <View style={{marginTop: 30, marginLeft: 40}}>
            <View style={{}}>
              <Text style={{fontSize: 17, color: '#a0a0a0'}}>
                Phát triển bới sinh viên đại học Công nghệ
              </Text>
              <Text style={{fontSize: 17, color: '#a0a0a0', marginLeft: 60}}>
                {' '}
                Đại học quốc gia Hà Nội
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginLeft: -15,
                  marginTop: 30,
                  color: '#a0a0a0',
                }}>
                144 Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hà Nội
              </Text>
            </View>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button
              badge
              vertical
              onPress={() => {
                this.props.navigation.navigate('Home');
              }}>
              <Icon name="home" size={20} color="white" />
              <Text>Home</Text>
            </Button>
            <Button
              vertical
              onPress={() => {
                this.props.navigation.navigate('Grammar');
              }}>
              <Icon name="address-book" size={20} color="white" />
              <Text>Grammar</Text>
            </Button>
            <Button
              vertical
              onPress={() => {
                this.props.navigation.navigate('Vocabulary');
              }}>
              <Icon name="book" size={20} color="white" />
              <Text>Vocabulary</Text>
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
const styles = StyleSheet.create({
  style: {
    backgroundColor: 'rgb(60,179,113)',
    width: '100%',
    height: 50,
  },
  image: {
    width: 110,
    height: 130,
    marginTop: 20,
    marginLeft: 150,
  },
  content: {
    fontSize: 20,
    marginLeft: 140,
    marginTop: 10,
    color: 'rgb(60,179,113)',
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginTop: -29,
    marginLeft: 60,
  },
});
