import React, { Component } from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
  state={
    items:[],
    id: uuid(),
    item:''
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id:this.state.id,
      title:this.state.item,
      editItem: false
    }
    const updatedItem = [...this.state.items, newItem]

    this.setState({
      items: updatedItem,
      item: '',
      id:uuid()
    })
  };

  clearList = () => {
    this.setState({
      items: []
    })
  };

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item=> item.id !== id);

    this.setState({
      items: filteredItems
    })
  };

  handleEdit = id => {
    const editingItem = this.state.items.find(item=> item.id === id);

    
   
  };

  render() {
    //console.log(this.state, 'asda');
    return (
      <div className="container">
        <div className="row">
        <TodoInput
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}/>
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
