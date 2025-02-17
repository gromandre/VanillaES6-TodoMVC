import React, { Component } from 'react';
import './task-list.css';
import Task from '../task';
import PropTypes from 'prop-types'; // Импортируем компонент Task

export default class TaskList extends Component {
  render() {
    const { todos, onDeleted, onToggleDone, onEdited } = this.props;

    const elements = todos.map((item) => {
      return (
        <Task
          key={item.id}
          description={item.description}
          completed={item.completed}
          createdAt={item.createdAt}
          onDeleted={() => onDeleted(item.id)}
          onToggleDone={() => onToggleDone(item.id)}
          onEdited={(text) => onEdited(item.id, text)}
        />
      );
    });

    return <ul className="todo-list">{elements}</ul>;
  }
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onEdited: PropTypes.func.isRequired,
};
