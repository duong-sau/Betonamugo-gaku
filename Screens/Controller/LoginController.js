import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Login';
import {NavigationContainer} from '@react-navigation/native';
import SideMenu from '../../Template/SideMenu';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import {AccessToken} from 'react-native-fbsdk';
import './UserController';
import './AuthController';
import {GoogleSignin} from '@react-native-community/google-signin';
import Select from '../../Template/Select';
const Stack = createStackNavigator();
global.isLogin = 0;
global.grammarAchievements = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0,0, 0, 0, 0, 0];
global.vocabularyAchievements = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
global.userName = '';
global.userID = '';
global.userPicture = '';
global.loginFB = async (error, result) => {
  await AccessToken.getCurrentAccessToken().then((data) => {
    const credential = firebase.auth.FacebookAuthProvider.credential(
      data.accessToken,
    );
    global.loginFirebase(credential, 1);
    global.isLogin = 1;
    global.save();
  });
};

global.loginGG = async () => {
  await GoogleSignin.signIn().then((data) => {
    const credential = firebase.auth.GoogleAuthProvider.credential(
      data.idToken,
      data.accessToken,
    );
    global.loginFirebase(credential, 0);
    global.userPicture = data.user.photo;
    global.isLogin = 2;
    global.save();
  });
};
global.loginFirebase = (credential, t) => {
  firebase
    .auth()
    .signInWithCredential(credential)
    .then(function (user) {
      global.userID = user.user.uid;
      console.log(user.additionalUserInfo.profile.picture);
      if (t === 1) {
        global.userPicture = user.additionalUserInfo.profile.picture.data.url;
      }
      global.L.setState({repaint: 1});
      global.userName = user.user.displayName;
      global.getAuthUser();
    })
    .catch(function (error) {});
};
global.logout = async () => {
  global.remove();
  global.isLogin = 0;
  global.L.setState({repaint: 1});
};
export default class LoginController extends Component {
  constructor(props) {
    super(props);
    global.resume();
  }

  render() {
    GoogleSignin.configure({
      webClientId:
        '658296593761-4hsvt336ebr9afptpv5e68a2lv5ki4bl.apps.googleusercontent.com',
    });
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name={'Login'}
            component={Login}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name={'SideMenu'}
            component={SideMenu}
          />
          <Stack.Screen
            name={'Select'}
            component={Select}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
