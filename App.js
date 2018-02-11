/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Camera from 'react-native-camera';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Camera
   ref={(cam) => {
       this.camera = cam;
    }}
    style={styles.preview}
    aspect={Camera.constants.Aspect.fill}>
       <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
          [CAPTURE]
       </Text>
</Camera>
    );
    takePicture() {
      this.camera.capture()
         .then((data) => console.log(data))
         .catch(err => console.error(err));
}
const styles = StyleSheet.create({
preview: {
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width
},
capture: {
  flex: 0,
  backgroundColor: #00eeee,
  borderRadius: 5,
  color: '#000',
  padding: 10,
  margin: 40
}
}




