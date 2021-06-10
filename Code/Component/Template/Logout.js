import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import hideAlert from '../../Redux/Action/HideAlert';
import showAlert from '../../Redux/Action/ShowAlert';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../Template/Style';
class Logout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <View>
        <TouchableOpacity
          style={styles(this.props).container}
          onPress={this.props.showAlert}>
          <Icon
            name="power-off"
            size={20}
            color="white"
            style={styles(this.props).icons}
          />
          <Image
            style={styles(this.props).image}
            source={{
              uri: 'https://icon-library.com/images/off-icon/off-icon-1.jpg',
            }}
          />
          <Text style={styles(this.props).imageText}>LOG OUT</Text>
          <Text style={styles(this.props).iconText}>LOG OUT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    alert: state.alert,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    showAlert: () => dispatch(showAlert()),
    hideAlert: () => dispatch(hideAlert()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
