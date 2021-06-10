import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Vocabulary from '../Entity/Vocabulary/VocabularyTheme';
import Select from '../Screens/SelectScreen';
import About from '../Screens/AboutScreen';
import VocabularyEntity from '../Entity/Vocabulary/VocabularyEntity';
import LoginScreen from '../Screens/LoginScreen';
import Setting from '../Screens/Setting/SettingScreen';
import ResultScreen from '../Screens/Setting/ResultScreen';
import {StyleSheet} from 'react-native';
import Translate from '../Entity/Grammar/Translate';
const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      headerShown: false,
    }),
  },
  Home: {
    screen: Select,
    navigationOptions: () => ({
      headerShown: false,
    }),
  },
  Translate: {
    screen: Translate,
    navigationOptions: () => ({
      headerShown: false,
    }),
  },
  Vocabulary: {
    screen: Vocabulary,
    navigationOptions: () => ({
      headerShown: false,
    }),
  },
  About: {
    screen: About,
    navigationOptions: () => ({
      headerShown: false,
    }),
  },
  VocabularyEntity: {
    screen: VocabularyEntity,
    navigationOptions: () => ({
      headerShown: false,
    }),
  },

  Setting: {
    screen: Setting,
    navigationOptions: () => ({
      headerShown: false,
    }),
  },
  Result: {
    screen: ResultScreen,
    navigationOptions: () => ({
      headerShown: false,
    }),
  },
});
const Containers = createAppContainer(AppNavigator);

export default Containers;

export const styleTemplate = StyleSheet.create({
  TemplateStyle: {
    backgroundColor: '#4267b2',
  },
  HeaderStyle: {
    fontSize: 24,
    width: '100%',
    height: 55,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4267b2',
  },
  ContentStyle: {
    fontSize: 16,
    marginLeft: -10,
    marginTop: 10,
    color: '#a0a0a0',
    alignSelf: 'center',
  },
  ContentBackgroundStyle: {
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  ButtonBackgroundStyle: {
    backgroundColor: '#4267b2',
    borderRadius: 5,
    height: 60,
    width: 150,
    padding: 8,
  },
  ButtonStyle: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  CenterContentStyle: {
    alignItems: 'center',
  },
});
