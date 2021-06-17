import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <TouchableOpacity
        onPress={() => global.navigation.navigate('Home')}
        style={style.header}>
        <Image source={this.props.image} style={{width: 400, height: 80}} />
      </TouchableOpacity>
    );
  }
}
const style = StyleSheet.create({
  header: {
    borderWidth: 2,
    borderColor: 'black',
  },
});
