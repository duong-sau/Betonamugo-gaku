import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';
export let saveAchievement = () => {
  console.log('set auth user');
  let userObj = {
    userName: global.userName,
    userPicture: global.userPicture,
    achievements: global.grammarAchievements,
  };
  console.log(userObj);
  if (global.userID !== null) {
    const user = firebase.database().ref('user/' + global.userID);
    user.set(userObj);
  }
};
export let getAchievement = () => {
  console.log('get Achievement');
  let database = firebase
    .database()
    .ref('user/' + global.userID + '/achievements');
  database.on('value', (datasnap) => {
    if (datasnap.val() === null) {
      //global.L.props.navigation.replace('Select');
    } else {
      global.grammarAchievement = datasnap.val();
    }
  });
};
