import React, { Component } from "react";
import uuid from "uuid/v4";

export default class TodoForm extends Component {
  state = {
    todo: ""
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    //call function in parent todolist
    this.props.onCreateTask({ ...this.state, id: uuid() });
    this.setState({
      todo: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            name="todo"
            type="text"
            value={this.state.task}
            onChange={this.onInputChange}
          />
          <button type="submit">Add to do</button>
        </form>
      </div>
    );
  }
}
