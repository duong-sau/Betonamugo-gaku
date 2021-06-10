import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {GoogleSignin} from '@react-native-community/google-signin';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import auth from '@react-native-firebase/auth';
import Spinner from 'react-native-loading-spinner-overlay';
import {Get, Sync} from '../Firebase/Sync';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      OTP: '',
      confirm: null,
      spinner: false,
    };
  }
  loginFirebase = (credential, t) => {
    console.log('cre');
    console.log(credential);
    this.setState({spinner: true});

    firebase
      .auth()
      .signInWithCredential(credential)
      .then((user) => {
        console.log(user);
        global.user.userid = user.user.uid;
        if (t === 1) {
          global.user.userPhoto =
            user.additionalUserInfo.profile.picture.data.url;
        }
        global.user.userName = user.user.displayName;
        if (user.additionalUserInfo.isNewUser) {
          Sync();
        } else {
          Get();
        }
        this.setState({spinner: false});
        this.props.navigation.navigate('Home');
        return 1;
      })
      .catch((error) => {
        Alert.alert('Login Fail');
        console.log('err when firebase');
        console.log(error);
        this.setState({spinner: false});
      });
  };
  loginGG = async () => {
    console.log('loginGG');
    GoogleSignin.signIn().then((data) => {
      console.log(data);
      const credential = firebase.auth.GoogleAuthProvider.credential(
        data.idToken,
        data.accessToken,
      );
      global.user.userPhoto = data.user.photo;
      this.loginFirebase(credential, 2);
    });
  };
  loginFB = async () => {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
    const credential = firebase.auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    console.log(data);
    this.loginFirebase(credential, 1);
  };
  getCode = async () => {
    await auth()
      .signInWithPhoneNumber(this.state.phone)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        this.setState({confirm: confirmationResult});
      });
  };
  loginSMS = async () => {
    try {
      this.setState({spinner: true});
      await this.state.confirm.confirm(this.state.OTP).then((result) => {
        console.log(result);
        global.user.userid = result.user.uid;
        global.user.userName = result.user.phoneNumber;
        global.user.phoneNumber = result.user.phoneNumber;
        if (result.additionalUserInfo.isNewUser) {
          Sync();
        } else {
          Get();
        }
      });
      this.setState({spinner: false});
      this.props.navigation.push('Home');
    } catch (error) {
      Alert.alert('Fail');
      console.log(error);
      this.setState({spinner: false});
    }
  };
  render() {
    GoogleSignin.configure({
      webClientId:
        '658296593761-4hsvt336ebr9afptpv5e68a2lv5ki4bl.apps.googleusercontent.com',
    });
    return (
      <View>
        <Spinner
          visible={this.state.spinner}
          textStyle={styles.spinnerTextStyle}
        />
        <View style={{position: 'absolute', top: 0}}>
          <Image
            style={{width: 500, height: 750, position: 'absolute'}}
            source={require('../image/background.jpg')}
          />
          <View style={{top: 50, position: 'absolute', left: 110}}>
            <Image
              style={{width: 200, height: 200}}
              source={require('../image/logo-app1.png')}
            />
          </View>
        </View>
        <Animatable.View animation="zoomIn" delay={700}>
          <View style={{marginTop: 280, marginLeft: 80}}>
            <View style={styles.inputContainer}>
              <Image
                style={styles.inputIcon}
                source={{
                  uri: 'https://png.icons8.com/message/ultraviolet/50/3498db',
                }}
              />
              <TextInput
                style={styles.inputs}
                placeholder="Phone number"
                keyboardType="phone-pad"
                underlineColorAndroid="transparent"
                onChangeText={(phone) => this.setState({phone})}
              />
              <TouchableHighlight
                style={{
                  backgroundColor: '#00b5ec',
                  height: 30,
                  width: 50,
                  borderRadius: 5,
                  marginRight: 20,
                  color: 'white',
                }}
                onPress={() => {
                  this.getCode().then();
                }}>
                <Text style={{marginTop: 5, marginLeft: 10}}>OTP</Text>
              </TouchableHighlight>
            </View>

            <View style={styles.inputContainer}>
              <Image
                style={styles.inputIcon}
                source={{
                  uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db',
                }}
              />
              <TextInput
                style={styles.inputs}
                placeholder="OTP"
                secureTextEntry={true}
                underlineColorAndroid="transparent"
                onChangeText={(OTP) => this.setState({OTP})}
              />
            </View>

            <TouchableHighlight
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={() => {
                this.loginSMS();
              }}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableHighlight>

            <View
              style={{
                flexDirection: 'row',
                marginLeft: 60,
              }}>
              <Icon
                name="google-plus-square"
                size={40}
                color="white"
                onPress={() => {
                  this.loginGG();
                }}
              />
              <Icon
                name="facebook-square"
                size={40}
                color="#3b5998"
                style={{marginLeft: 40, width: 200, height: 100}}
                onPress={() => {
                  this.loginFB();
                }}
              />
            </View>
          </View>
        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 0,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#00b5ec',
  },
  loginText: {
    color: 'white',
  },
});
