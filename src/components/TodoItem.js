import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    const {title, editItem, handleDelete, handleEdit} = this.props;
    
    return (
      <li className="list-group-item">
        <div className={!editItem?"disabled":""}>
          <h6>{title}</h6>
          <span className="text-success" onClick={handleEdit}>edit</span>
          <span className="text-danger" onClick={handleDelete}>delete</span>
        </div>
      </li>
    )
  }
}
