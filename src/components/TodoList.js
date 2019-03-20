import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {

    const {items, clearList, handleDelete, handleEdit} = this.props;

    return (
      <section>
        <ul className="list-group">
          <h3>todo list</h3>
          {items.map(item=>{
            return(
              <TodoItem
                key={item.id}
                title={item.title}
                editItem={item.editItem}
                handleDelete={()=>handleDelete(item.id)}
                handleEdit={()=>handleEdit(item.id)}>
              </TodoItem> )}
            )
          }
        </ul>
        <button className="btn" onClick={clearList}>apagar lista</button>
      </section>   
    )
  }
}
