import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/FontAwesome';
import './Controller/SetAuth';
import 'ajv';
let P;
let data = [];
let questionList = [];
let answer = [];
let numberQuestion = 0;
let max = 1;
let correct = 0;
let unCorrect = 0;
let unfinished = 0;
let questionValue;
let key;
let sort = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export default class Practice extends Component {
  constructor({ props }) {
    super(props);
    // eslint-disable-next-line consistent-this
    P = this;
    this.state = {
      answer: -1,
      question: 0,
      number: 1,
      s: 0,
    };
  }
  loadFromDataBase = async () => {
    try {
      let q1 = firebase.database().ref(key);
      q1.on('value', (datasnap) => {
        questionValue = datasnap.val();
        P.build();
        if (questionValue != null) {
          P.saveFromDataBase();
        }
      });
    } catch (e) { }
  };
  saveFromDataBase = async () => {
    await AsyncStorage.setItem(key, JSON.stringify(questionValue))
      .then(() => { })
      .catch(() => { });
  };
  build() {
    try {

      questionList = Object.values(questionValue);

      data[4] = questionList[numberQuestion].question;
      data[0] = questionList[numberQuestion].a0;
      data[1] = questionList[numberQuestion].a1;
      data[2] = questionList[numberQuestion].a2;
      data[3] = questionList[numberQuestion].a3;
      max = questionList.length - 1;
      for (let i = 0; i <= max; i++) {
        answer[i] = -1;
      }
      this.setState({
        answer: -1,
        question: 0,
        number: 1,
        s: 0,
      });
      for (let i = 0; i <= max; i++) {

        sort[i] = Math.round(Math.random() * 4);

      }
      this.setState({ s: 0 });
    } catch (e) {
      P.props.navigation.replace('Grammar');

    }
  }
  reLoad = async () => {
    try {
      let questionsString = await AsyncStorage.getItem(key);
      if (questionsString == null) {
        await this.loadFromDataBase();

      } else {
        questionValue = JSON.parse(questionsString);
        this.build();
      }
    } catch (e) {
      await this.loadFromDataBase();
    }
  };
  componentDidMount() {
    key = this.props.route.params.key.toString();
    this.reLoad().then();
  }

  select(id) {
    this.setState({
      answer: id,
    });
  }
  save() {
    answer[numberQuestion] = P.state.answer;
  }
  resum() {
    questionList = Object.values(questionValue);

    data[4] = questionList[numberQuestion].question;
    data[0] = questionList[numberQuestion].a0;
    data[1] = questionList[numberQuestion].a1;
    data[2] = questionList[numberQuestion].a2;
    data[3] = questionList[numberQuestion].a3;
    max = questionList.length - 1;
    this.setState({
      answer: answer[numberQuestion],
      question: numberQuestion,
    });
  }

  next() {
    if (numberQuestion >= max) {
    } else {
      this.save();
      numberQuestion = numberQuestion + 1;
      this.resum();
    }
  }
  back() {
    if (numberQuestion <= 0) {
    } else {
      this.save();
      numberQuestion = numberQuestion - 1;
      this.resum();
    }
  }
  submit = async () => {
    this.save();
    for (let i = 0; i <= max; i++) {
      if (answer[i] === 0) {
        correct = correct + 1;
      } else if (answer[i] === -1) {
        unfinished = unfinished + 1;
      } else {
        unCorrect = unCorrect + 1;
      }
    }
    if (correct > global.grammarAchievements[global.grammarState]) {
      global.grammarAchievements[global.grammarState] = correct;
      await global.setAuthUser();
    }
  };
  reset() {
    numberQuestion = 0;
    correct = 0;
    unCorrect = 0;
    unfinished = 0;
  }
  render() {
    return (
      <View style={{ backgroundColor: "#E0E0E0", height: "100%" }}>
        <View style={styles.titleFrame}>
          <View style={styles.icons} />
          <Icon
            name="chevron-left"
            color="white"
            size={20}
            onPress={() => {
              this.props.navigation.replace('Grammar');
            }}
          />
          <Text style={styles.titleText}>
            {this.props.route.params.title}
          </Text>
          {/*  <Text style={{marginLeft:140, width:45, height:45, backgroundColor:"#E0E0E0", borderRadius:45, textAlign:"center", color:"black", fontSize:25, fontWeight:"bold", paddingTop:3}}>
            {this.state.question + 1}
          </Text> */}
        </View>
        <View style={styles.question}>
          <Text style={{ marginTop: 20, fontSize: 18, fontWeight: "bold", marginLeft: 10 }}>
            {this.state.question + 1}. {data[4]}
          </Text>
        </View>
        <View style={styles.answerFrame}>
          <View style={{ backgroundColor: "white", height: '15%', paddingTop: 10, marginBottom: 10, width: "95%", marginLeft: 10, marginTop: 40, borderRadius: 5, borderWidth: 1, borderColor: "#C0C0C0" }}>
            <Answer
              content={data[(sort[P.state.question] + 1) % 4]}
              id={(sort[P.state.question] + 1) % 4}
            />
          </View>

          <View style={{ backgroundColor: "white", height: '15%', paddingTop: 10, marginBottom: 10, width: "95%", marginLeft: 10, marginTop: 10, borderRadius: 5, borderWidth: 1, borderColor: "#C0C0C0" }}>
            <Answer
              content={data[(sort[P.state.question] + 2) % 4]}
              id={(sort[P.state.question] + 2) % 4}
            />
          </View>
          <View style={{ backgroundColor: "white", height: '15%', paddingTop: 10, marginBottom: 10, width: "95%", marginLeft: 10, marginTop: 10, borderRadius: 5, borderWidth: 1, borderColor: "#C0C0C0" }}>
            <Answer
              content={data[(sort[P.state.question] + 3) % 4]}
              id={(sort[P.state.question] + 3) % 4}
            />
          </View>
          <View style={{ backgroundColor: "white", height: '15%', paddingTop: 10, marginBottom: 10, width: "95%", marginLeft: 10, marginTop: 10, borderRadius: 5, borderWidth: 1, borderColor: "#C0C0C0" }}>
            <Answer
              content={data[(sort[P.state.question] + 4) % 4]}
              id={(sort[P.state.question] + 4) % 4}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.back_button}
            onPress={() => {
              this.back();
            }}>
            <Icon name="arrow-circle-left" size={50} color="rgb(60,179,113)" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submit_button}
            onPress={() => {
              this.submit();
              this.props.navigation.replace('Result', {
                correct: correct,
                unCorrect: unCorrect,
                unfinished: unfinished,
                title: this.props.route.params.title,
                key: this.props.route.params.key,
                ID: this.props.route.params.ID,
              });
              this.reset();
            }}>
            <Text style={styles.footerText}>SUBMIT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.next_button}
            onPress={() => {
              this.next();
            }}>
            <Icon name="arrow-circle-right" size={50} color="rgb(60,179,113)" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function isSelect(state, id) {
  return state === id;
}
export class Answer extends Component {
  render() {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        <CheckBox
          style={styles.checkbox}
          value={isSelect(P.state.answer, this.props.id)}
          onChange={() => {
            P.select(this.props.id);
          }}
        />
        <Text style={styles.content}>{this.props.content}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleFrame: {
    width: '100%',
    height: '10%',
    backgroundColor: 'rgb(60,179,113)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

  },
  titleText: {
    color: 'white',
    fontSize: 25,

    marginLeft: '5%',
  },
  icons: {
    marginLeft: 15,
  },
  question: {
    marginLeft: '2%',
    fontSize: 20,
    marginTop: 20,
    marginBottom: -100,
    fontWeight: 'bold',
    width: "95%",
    height: "15%",
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "white",
    backgroundColor: "white"
  },
  answerFrame: {
    marginTop: 120,
    marginLeft: 10,
    backgroundColor: "white",
    width: "95%",
    height: "50%",
    borderRadius: 5
  },
  answer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 55,
    fontSize: 70,
    borderColor: 'red',
    borderWidth: 1,
    flexDirection: 'row',
  },
  content: {
    fontSize: 20,
    marginLeft: '1%',
    color: 'black',
  },
  selectContent: {
    fontSize: 18,
    marginLeft: '5%',
    color: 'green',
  },
  footer: {
    marginTop: 40,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: -40
  },
  footerText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  image: {
    width: 50,
    height: 50,
  },
  next_button: {
    marginRight: 70,
  },
  back_button: {
    marginLeft: 80,
  },
  submit_button: {
    width: 180,
    backgroundColor: 'rgb(60,179,113)',
    borderRadius: 35,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginLeft: 30,
    marginRight: 30,
  },
});
