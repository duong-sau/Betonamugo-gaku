import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  ListItem,
  Text,
  Left,
  Body,
  Right,
  Footer,
  FooterTab,
  Title,
  Button,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ToggleSwitch from 'toggle-switch-react-native';
import Logout from '../../Template/Logout';
import {TouchableOpacity, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {start, stop} from '../../Template/Music';
let S;
export default class Setting extends Component {
  constructor(props) {
    super(props);
    S = this;
    this.state = {
      onSwitch: 0,
      sound: false,
    };
  }
  componentDidMount() {
    if (
      global.user.notification != null &&
      global.user.notification != '' &&
      global.user.notification != undefined
    ) {
      this.setState({onSwitch: 2});
    }
    if (global.user.music === 'a') {
      this.setState({music: true});
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
              onPress={() => {
                this.props.navigation.navigate('Grammar');
              }}
            />
          </Left>
          <Body>
            <Title>Setting</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <ListItem style={{height: 70}}>
            <Left>
              <Button
                style={{
                  backgroundColor: '#FF9501',
                  width: 30,
                  height: 30,
                  borderRadius: 5,
                }}>
                <Icon
                  active
                  name="bell"
                  color="white"
                  size={18}
                  style={{marginLeft: 6}}
                />
              </Button>
            </Left>
            <Body>
              <Text style={{marginLeft: -120}}>Notification</Text>
            </Body>
            <Right>
              <ToggleSwitch
                isOn={this.state.onSwitch == 1 || this.state.onSwitch == 2}
                onColor="green"
                offColor="#C0C0C0"
                labelStyle={{color: 'black', fontWeight: '900'}}
                onToggle={() => {
                  if (this.state.onSwitch == 1 || this.state.onSwitch == 2) {
                    console.log('123');
                    offNotification();
                    this.setState({
                      onSwitch: 0,
                    });
                  } else {
                    this.setState({onSwitch: 1});
                  }
                }}
                size="30"
              />
            </Right>
          </ListItem>
          <ListItem>
            <Picker show={this.state.onSwitch} />
          </ListItem>
          <ListItem style={{height: 70}}>
            <Left>
              <Button
                style={{
                  backgroundColor: '#006600',
                  width: 30,
                  height: 30,
                  borderRadius: 5,
                }}>
                <Icon
                  active
                  name="music"
                  color="white"
                  size={20}
                  style={{marginLeft: 5}}
                />
              </Button>
            </Left>
            <Body>
              <Text style={{marginLeft: -120}}>Music</Text>
            </Body>
            <Right>
              <ToggleSwitch
                isOn={this.state.music}
                onColor="green"
                offColor="#C0C0C0"
                labelStyle={{color: 'black', fontWeight: '900'}}
                onToggle={() => {
                  console.log('Sound play');
                  if (global.user.music == 'a') {
                    this.setState({music: false});
                    stop();
                  } else {
                    this.setState({music: true});
                    start();
                  }
                }}
                size="30"
              />
            </Right>
          </ListItem>

          <ListItem
            style={{height: 70}}
            onPress={() => {
              this.props.navigation.navigate('Result');
            }}>
            <Left>
              <Button
                style={{
                  backgroundColor: '#0066CC',
                  width: 30,
                  height: 30,
                  borderRadius: 5,
                }}>
                <Icon
                  active
                  name="book"
                  color="white"
                  size={18}
                  style={{marginLeft: 7}}
                />
              </Button>
            </Left>
            <Body>
              <Text style={{marginLeft: -120}}>Achievement</Text>
            </Body>
            <Right>
              <Icon active name="chevron-right" size={16} color="#A0A0A0" />
            </Right>
          </ListItem>

          <Icon
            name="cogs"
            size={170}
            color="#808080"
            style={{marginLeft: 100, marginTop: 60}}
          />
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

export class Picker extends Component {
  constructor(props) {
    super(props);
  }
  onChange(time) {
    onNotification(time.nativeEvent.timestamp.toString().slice(16, 21)),
      S.setState({onSwitch: 2});
    console.log(global.user.notification);
  }

  render() {
    if (this.props.show == 1) {
      return (
        <View>
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date(1598051730000)}
            mode={'time'}
            is24Hour={true}
            display="default"
            onChange={(time) => {
              this.onChange(time);
            }}
          />
        </View>
      );
    } else if (this.props.show == 2) {
      return (
        <View>
          <TouchableOpacity
            onPress={() => {
              S.setState({onSwitch: 1});
            }}>
            <Text>{global.user.notification}</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return <View />;
    }
  }
}
