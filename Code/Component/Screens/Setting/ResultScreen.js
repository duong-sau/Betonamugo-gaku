import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import VocabularyChart from '../../Template/Chart/PieChart';
import GrammarChart from '../../Template/Chart/BarChart';
import {
  Container,
  Header,
  Content,
  Button,
  Left,
  Body,
  Right,
  Footer,
  FooterTab,
  Title,
} from 'native-base';
import Logout from '../../Template/Logout';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

export default class Result extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log(global.user.userPhoto);
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
                this.props.navigation.navigate('Grammar');
              }}
            />
          </Left>
          <Body>
            <Title>Achievement</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Animatable.View animation="fadeInUpBig" delay={700}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <LinearGradient
                colors={['#004C99', '#66B2FF']}
                style={styles.frame}>
                <View style={styles.frameElement}>
                  <VocabularyChart />
                </View>
              </LinearGradient>
              <Text style={styles.text}>Kết quả học từ mới</Text>
              <LinearGradient
                colors={['#004C99', '#66B2FF']}
                style={styles.frame}>
                <View style={styles.frameElement}>
                  <GrammarChart />
                </View>
              </LinearGradient>
              <Text style={styles.text}>Kết quả học ngữ pháp</Text>
            </View>
          </Animatable.View>
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
              <Text style={styles.footerText}>HOME</Text>
            </Button>
            <Button
              vertical
              onPress={() => {
                this.props.navigation.navigate('Grammar');
              }}>
              <Icon name="address-book" size={20} color="white" />
              <Text style={styles.footerText}>GRAMMAR</Text>
            </Button>
            <Button
              vertical
              onPress={() => {
                this.props.navigation.navigate('Vocabulary');
              }}>
              <Icon name="book" size={20} color="white" />
              <Text style={styles.footerText}>VOCABULARY</Text>
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
  frameElement: {
    width: 390,
    height: 230,
  },
  frame: {
    marginTop: 20,
    borderRadius: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'Lato-Bold',
  },
  footerText: {
    color: 'white',
    fontSize: 11,
    opacity: 0.6,
  },
});
