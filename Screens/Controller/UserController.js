import AsyncStorage from '@react-native-community/async-storage';
function UserController() {
  global.resume = async () => {
    let userName = await AsyncStorage.getItem('userName');
    let userPicture = await AsyncStorage.getItem('userPicture');
    let userID = await AsyncStorage.getItem('userID');
    let isLogin = await Number(AsyncStorage.getItem('isLogin'));

    if (userID == null || isLogin === 0) {
      console.log('resume0');
      global.isLogin = 0;
      global.L.setState();
    } else {
      console.log('resum1');
      global.isLogin = isLogin;
      global.userName = userName;
      global.userPicture = userPicture;
      global.userID = userID;
      global.getAuthUser();
      global.L.setState();
    }
  };
  global.save = async () => {
    console.log('save');
    await AsyncStorage.setItem('userName', global.userName);
    await AsyncStorage.setItem('userPicture', global.userPicture);
    await AsyncStorage.setItem('userID', global.userID);
    await AsyncStorage.setItem('isLogin', String(global.isLogin));
  };
  global.remove = async () => {
    console.log('remove');
    await AsyncStorage.removeItem('userName');
    await AsyncStorage.removeItem('userPicture');
    await AsyncStorage.removeItem('userID');
    await AsyncStorage.removeItem('isLogin');
  };
}
export default UserController();
