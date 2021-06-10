import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
        <Image source={this.props.image} style={{width: 400, height: 80}} />
      </TouchableOpacity>
    );
  }
}
