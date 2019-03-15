import React, { Component } from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
  state={
    items:[
      {
        id:1,
        title: 'wake up'
      },
      {
        id:2,
        title: 'wake up'
      }
    ],
    id: uuid(),
    item:'',
    editItem: false
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id:this.state.id,
      title:this.state.item
    }
    const updatedItem = [...this.state.items, newItem]

    this.setState({
      items: updatedItem,
      item: '',
      id:uuid(),
      editItem: false
    })
  }

  clearList = (e) => {
    console.log(e);
  }

  handleDelete = (e) => {
    console.log(e);
  }

  handleEdit = (e) => {
    console.log(e);
  }

  render() {
    //console.log(this.state, 'asda');
    return (
      <div className="container">
        <div className="row">
        <TodoInput
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          editItem={this.editItem}/>
        <TodoList 
          items={this.state.items}
          clearList={this.clearList}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
        </div>
      </div>
    );
  }
}

export default App;
