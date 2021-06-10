/**
 * Copyright (c) 2011-2019, Zingaya, Inc. All rights reserved.
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {store} from './Code/Redux/Store/index';
import {AppState, Platform, StyleSheet} from 'react-native';
import VIForegroundService from '@voximplant/react-native-foreground-service';
import ClipboardListener from 'react-native-clipboard-listener';
import KeyEvent from 'react-native-keyevent';
import {Provider} from 'react-redux';
import Containers from './Code/Component/Template/StackNavigator';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    global.user = {
      userName: '',
      userid: '',
      userPhoto: '',
      phoneNumber: '',
      notification: '',
      music: false,
      grammarAchievement: [0, 0, 0, 0, 0, 0, 0],
      vocabularyAchievement: {
        G1: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        G2: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        G3: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        G4: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        G5: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        G6: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        G7: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        G8: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        G9: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        G10: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    };
    global.max = [15, 15, 15, 15, 15, 15, 15];
  }

  async startService() {
    if (Platform.OS !== 'android') {
      console.log('Only Android platform is supported');
      return;
    }
    if (Platform.Version >= 26) {
      const channelConfig = {
        id: 'ForegroundServiceChannel',
        name: 'Notification Channel',
        description: 'Notification Channel for Foreground Service',
        enableVibration: false,
        importance: 2,
      };
      await VIForegroundService.createNotificationChannel(channelConfig);
    }
    const notificationConfig = {
      id: 3456,
      title: 'Foreground Service',
      text: 'run con cawcj',
      icon: 'ic_notification',
      priority: 0,
    };
    if (Platform.Version >= 26) {
      notificationConfig.channelId = 'ForegroundServiceChannel';
    }
    await VIForegroundService.startService(notificationConfig);
    ClipboardListener.setListener((event) => {
      console.log('get');
      console.log(event);
    });
  }

  async stopService() {
    await VIForegroundService.stopService();
  }
  componentDidMount() {
    AppState.addEventListener('change', (state) =>
      console.log('AppState changed to', state),
    );
    this.startService().then((r) => console.log(r));
    KeyEvent.onKeyDownListener((keyEvent) => {
      console.log(`onKeyDown keyCode: ${keyEvent.keyCode}`);
      console.log(`Action: ${keyEvent.action}`);
      console.log(`Key: ${keyEvent.pressedKey}`);
      // if you want to react to keyUp
      KeyEvent.onKeyUpListener((keyEvent) => {
        console.log(`onKeyUp keyCode: ${keyEvent.keyCode}`);
        console.log(`Action: ${keyEvent.action}`);
        console.log(`Key: ${keyEvent.pressedKey}`);
      });

      // if you want to react to keyMultiple
      KeyEvent.onKeyMultipleListener((keyEvent) => {
        console.log(`onKeyMultiple keyCode: ${keyEvent.keyCode}`);
        console.log(`Action: ${keyEvent.action}`);
        console.log(`Characters: ${keyEvent.characters}`);
      });
    });
  }

  render() {
    /*
    return (
      <View style={styles.container}>
        <Button
          title="Start foreground service"
          onPress={() => this.startService()}
        />
        <View style={styles.space} />
        <Button
          title="Stop foreground service"
          onPress={() => this.stopService()}
        />
      </View>
    );

     */
    return (
      <Provider store={store}>
        <Containers />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  space: {
    flex: 0.1,
  },
});
