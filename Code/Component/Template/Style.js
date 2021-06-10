import {StyleSheet} from 'react-native';
export const styles = (props) =>
  StyleSheet.create({
    container: {
      backgroundColor: props.backgroundColor,
      width: props.width,
      height: props.height,
      borderRadius: props.borderRadius,
      marginTop: props.marginTop,
      marginLeft: props.marginLeft,
    },
    icons: {
      display: props.displayIcon,
      marginLeft: 20,
      marginTop: 7,
    },
    imageText: {
      display: props.displayText,
      fontSize: 15,
      color: 'black',
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: 10,
    },
    iconText: {
      color: 'white',
      opacity: 0.6,
      fontSize: 11,
      marginTop: 1,
      marginLeft: 7,
    },
    image: {
      width: 70,
      height: 70,
      marginLeft: 40,
      marginTop: 25,
      display: props.displayImage,
    },
  });
