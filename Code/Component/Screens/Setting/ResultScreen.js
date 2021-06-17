import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import VocabularyChart from '../../Template/Chart/PieChart';
import {Container, Content} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {Header} from '../../Template/Header';

export default class Result extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log(global.user.userPhoto);
  }
  render() {
    return (
      <Container style={{backgroundColor: '#e5e5e5'}}>
        <Header image={require('../../image/TK.png')} />
        <Content>
          <Animatable.View animation="fadeInUpBig" delay={700}>
            <View
              style={{
                backgroundColor: '#e5e5e5',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 100,
              }}>
              <LinearGradient
                colors={['#f5f5f5', '#e5e5e5']}
                style={styles.frame}>
                <View style={styles.frameElement}>
                  <VocabularyChart />
                </View>
              </LinearGradient>
              <Text style={styles.text}>記憶された新しい単語の統計</Text>
            </View>
          </Animatable.View>
        </Content>
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
    color: 'black',
  },
});
