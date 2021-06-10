import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store} from '../Redux/Store';
import LoginScreen from '../Component/Screens/LoginScreen';

export default class Main extends Component {
  render() {
    global.navigation = this.props.navigation;
    return (
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );
  }
}
