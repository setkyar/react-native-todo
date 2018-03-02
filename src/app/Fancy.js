import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {styles} from './css/styles'

export class Fancy extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>

        </View>
        <Text style={styles.text}>Hello... from the other side!</Text>
      </View>
    );
  }
}