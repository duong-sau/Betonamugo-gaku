import React, {Component} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import Header from '../../Template/Header';

global.grammarState = 0;
export default class Grammar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Header
          title={'単語'}
          navigation={this.props.navigation}
          type={'bars'}
        />
        <FlatList
          data={[
            {
              content: '挨拶',
              img: require('../../src/VocabularyImage/greeting.png'),
              key: 'G1',
              ID: 1,
            },
            {
              content: '友達',
              img: require('../../src/VocabularyImage/friend1.png'),
              ID: 2,
              key: 'G2',
            },
            {
              content: '地球',
              img: require('../../src/VocabularyImage/earth1.png'),
              key: 'G3',
              ID: 3,
            },
            {
              content: '食物',
              img: require('../../src/VocabularyImage/eat1.png'),
              key: 'G4',
              ID: 4,
            },
            {
              content: 'スポーツ',
              img: require('../../src/VocabularyImage/sport.jpg'),
              key: 'G5',
              ID: 5,
            },
            {
              content: '時間\n',
              img: require('../../src/VocabularyImage/time1.png'),
              key: 'G6',
              ID: 6,
            },
            {
              content: 'ジョブ',
              img: require('../../src/VocabularyImage/job1.webp'),
              key: 'G7',
              ID: 7,
            },
            {
              content: '国家',
              img: require('../../src/VocabularyImage/nation.png'),
              key: 'G8',
              ID: 8,
            },
            {
              content: 'ドリンク',
              img: require('../../src/VocabularyImage/drink1.png'),
              key: 'G9',
              ID: 9,
            },
          ]}
          numColumns={1}
          renderItem={({item}) => (
            <View style={styles.style}>
              <TouchableOpacity
                style={styles.category}
                onPress={() => {
                  global.grammarState = item.ID - 1;
                  this.props.navigation.push('GrammarEntity', {
                    title: item.content,
                    key: item.key,
                    ID: item.ID,
                  });
                }}>
                <View style={styles.circle}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                    source={item.img}
                  />
                </View>
                <View style={styles.stand_circle}>
                  <Text style={styles.content}>{item.content}</Text>
                  <View style={styles.progress}>
                    <Text style={styles.content_percent}>
                      {Math.round(
                        (global.user.grammarAchievement[item.ID - 1] /
                          global.max[item.ID - 1]) *
                          100,
                      )}
                      %
                    </Text>
                    <ProgressBar
                      style={styles.progressBar}
                      styleAttr="Horizontal"
                      indeterminate={false}
                      animating={false}
                      progress={
                        global.user.grammarAchievement[item.ID - 1] / 15
                      }
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
        <View style={styles.empty} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  progressBar: {
    width: '100%',
    marginTop: -55,
    marginLeft: 0,
  },
  empty: {
    width: '100%',
    height: '20%',
  },

  style: {
    flex: 1,
    borderColor: '#e5e5e5',
    borderWidth: 1,
    alignItems: 'flex-start',
  },
  category: {
    marginBottom: '3%',
    marginTop: '3%',
  },
  content: {
    width: '100%',
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 0,
    fontWeight: 'bold',
  },
  progress: {
    width: '100%',
    marginBottom: 10,
    marginLeft: 20,
    marginTop: 10,
  },
  textTitle: {
    color: 'white',
    fontSize: 25,
    marginLeft: 25,
    marginTop: 17,
    fontWeight: 'bold',
  },
  circle: {
    width: '10%',
    height: 50,
    backgroundColor: '#4267b2',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
    marginLeft: 10,
    marginTop: 10,
  },
  stand_circle: {
    marginTop: -60,
    marginLeft: 60,
  },
  textCircle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 5,
  },
  content_percent: {
    marginTop: 15,
    marginLeft: 5,
    paddingBottom: 15,
  },
});
