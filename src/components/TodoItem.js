import React, { Component } from "react";

export default class TodoItem extends Component {
  state = {
    isEditing: false,
    task: this.props.tasktopass
  };
  handleEdit = () => {
    this.props.onEdit(this.props.id);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.id);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleUpdate = e => {
    e.preventDefault();
    this.props.onEdit(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  };

  toggeForm = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <button onClick={this.toggeForm}>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
          <li>{this.props.tasktopass}</li>
        </div>
      );
    }
    return result;
  }
}
