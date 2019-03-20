import React, { Component } from 'react'

export default class TodoInput extends Component {
  render() {

    const {item, handleChange, handleSubmit} = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
              </div>
            </div>
          </div>
          <input type="text" className="form-control" placeholder="stuff" value={item}
          onChange={handleChange}/>
          <button type="submit" className="btn btn-block btn-primary">add</button>
        </form>
      </div>
    )
  }
}
