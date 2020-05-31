import React, { Component } from "react";
import uuid from "uuid/v4";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export default class TodoList extends Component {
  state = {
    tasks: []
  };

  createTask = todo => {
    this.setState({
      tasks: [...this.state.tasks, todo]
    });
  };

  onDelete = id => {
    const deleteTodo = this.state.tasks.filter(todo => todo.id !== id);
    this.setState({
      tasks: deleteTodo
    });
  };

  update = (id, updatedTask) => {
    const updatedTodos = this.state.tasks.map(task => {
      if (task.id === id) {
        return { ...task, todo: updatedTask };
      }
      return task;
    });
    this.setState({ tasks: updatedTodos });
  };

  render() {
    return (
      <div>
        <TodoForm onCreateTask={this.createTask} />
        <ul>
          {this.state.tasks.map(task => {
            return (
              <TodoItem
                onEdit={this.update}
                // onEdit={this.Edit}
                onDelete={this.onDelete}
                tasktopass={task.todo}
                id={task.id}
                key={task.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
