import React, { Component } from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}

export default App;
