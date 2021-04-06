import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Header extends Component {
  render() {
    return (
      <View style={global.style.HeaderStyle}>
        <TouchableOpacity
          onPress={() => {
            if (this.props.type == 'bars') {
              this.props.navigation.dispatch(DrawerActions.openDrawer());
            } else {
              this.props.navigation.pop(1);
            }
          }}>
          <Icon
            style={styles.IconStyle}
            name={this.props.type}
            color="white"
            size={30}
          />
        </TouchableOpacity>
        <Text style={{color: 'white', fontSize: 24}}>{this.props.title}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  IconStyle: {
    alignContent: 'center',
    margin: 10,
  },
});
