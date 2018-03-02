import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }
  componentWillMount() {
    fetch('http://localhost:3000/todos', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(todos => this.setState({todos}))
  }
  handleChange(text) {
    this.setState({newTodo: text})
  }
  handlePress() {
    // const todos = [...this.state.todos, this.state.newTodo];
    // this.setState({todos, newTodo: ''});
    fetch('http://localhost:3000/todos',{
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.newTodo
      }),
    })
    .then(res => res.json())
    .then(data => {
      const todos = [...this.state.todos, data];
      this.setState({todos, newTodo: ''})
    })
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={this.state.newTodo}
            placeholder="Add your new todo"
            onChangeText={this.handleChange.bind(this)}
          />
          <TouchableOpacity 
            style={styles.button}
            onPress={this.handlePress.bind(this)}>
            <Text style={styles.buttonText}>Make</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todos}>
          {this.state.todos.sort(function(a, b) {return parseFloat(b.id) - parseFloat(a.id)}).map((todo, index) => (
            <View key={index} style={styles.todo}>
              <Text style={styles.todoText}>{todo.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 20
  },
  form: {
    flexDirection: 'row'
  },
  input: {
    flex: 0.7,
    height: 45,
    fontSize: 24
  },
  button: {
    flex: 0.3,
    height: 35,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ButtonText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  todos: {
    marginTop: 30
  },
  todo: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  todoText: {
    fontSize: 24
  }
})