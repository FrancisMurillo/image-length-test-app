/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
    Image,
  Text,
  View
} from 'react-native';

export default class image extends Component {
  render() {
      return (
          <View>
            <Image source={{uri: 'http://192.168.1.100:34000/images/rider/f6edd7b7-a85d-4945-a05f-3f34e85f0c1c/avatar.png'}}
                   style={{width: 200, height: 200}}
                   />
            <Image source={{uri: 'http://192.168.1.100:34000/images/rider/f6edd7b7/avatar.png'}}
                   style={{width: 200, height: 200}}
                   />
          </View>
      );
  }
}


AppRegistry.registerComponent('image', () => image);
