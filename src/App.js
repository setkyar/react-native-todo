/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { Todo } from './app/Todo.js';
import { Reddit } from './app/Reddit.js';

export default class App extends Component<Props> {
  render() {
    return(
      <Todo/>
    )
  }
}