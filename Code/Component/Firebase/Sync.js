import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';
import {start, stop} from '../Template/Music';

export let Sync = () => {
  console.log('sync');
  if (global.user.userid !== null) {
    const user = firebase
      .database()
      .ref('user/' + global.user.userid + '/Profile/');
    user.set(global.user);
  } else {
    console.log('fail when sync');
  }
};
export let Get = () => {
  console.log('get Achievement');
  let database = firebase
    .database()
    .ref('user/' + global.user.userid + '/Profile/');
  database.on('value', (datasnap) => {
    if (datasnap.val() === null) {
      console.log('fail when sync');
    } else {
      global.user = datasnap.val();
      console.log(global.user);
      Set();
    }
    database.off();
  });
  console.log(global.user);
};
export let Set = () => {
  if (global.user.music == 'a') {
    start();
  } else {
    stop();
  }
  if (
    global.user.notification != null &&
    global.user.notification != '' &&
    global.user.notification != undefined
  ) {
  } else {
  }
};
