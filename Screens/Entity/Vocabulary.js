import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
export default class Vocabulary extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  static propTypes = {};

  componentDidMount() {}

  render() {
    return (
      <View style={styles.background}>
        <FlatList
          style={styles.flatShip}
          data={Data}
          numColumns={3}
          renderItem={({item}) => (
            <View style={styles.style}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Vocabulary', {
                    key: item.key,
                  });
                }}>
                <Image
                  style={{
                    marginLeft: 5,
                    marginTop: 20,
                    width: 70,
                    height: 70,
                  }}
                  source={item.img}
                />
                <Text style={{marginTop: 10, fontSize: 20, marginLeft: 5}}>
                  {item.content}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.content}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  style: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  background: {
    backgroundColor: 'white',
    width: '100%',
    height: 1000,
    display: 'flex',
    flexDirection: 'row',
  },
  flatShip: {
    marginTop: 20,
  },
  text: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginTop: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  barIcon: {
    marginTop: 20,
    marginLeft: 15,
  },
});

export let Data = [
  {
    content: 'Greeting',
    img: require('../../src/VocabularyImage/greeting.png'),
    key: 'V2',
  },
  {
    content: ' Travel',
    img: require('../../src/VocabularyImage/travel.png'),
    key: 'V3',
  },
  {
    content: ' Music',
    img: require('../../src/VocabularyImage/music1.png'),
    key: 'V4',
  },

  {
    content: ' Friend',
    img: require('../../src/VocabularyImage/friend1.png'),
    key: 'V5',
  },

  {
    content: '  Earth',
    img: require('../../src/VocabularyImage/earth1.png'),
    key: 'V1',
  },

  {
    content: '   Food',
    img: require('../../src/VocabularyImage/eat1.png'),
    key: 'V6',
  },

  {
    content: '  Sport',
    img: require('../../src/VocabularyImage/sport.jpg'),
    key: 'V7',
  },

  {
    content: '   Time',
    img: require('../../src/VocabularyImage/time1.png'),
    key: 'V8',
  },

  {
    content: '    Job',
    img: require('../../src/VocabularyImage/job1.webp'),
    key: 'V9',
  },
  {
    content: ' Vehicle',
    img: require('../../src/VocabularyImage/verhicle1.png'),
    key: 'V10',
  },
  {
    content: '  Nation',
    img: require('../../src/VocabularyImage/nation.png'),
    key: 'V11',
  },
  {
    content: '   Drink',
    img: require('../../src/VocabularyImage/drink1.png'),
    key: 'V12',
  },
];
