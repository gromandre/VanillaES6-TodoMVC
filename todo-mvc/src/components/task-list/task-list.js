import React, { Component } from "react";
import './task-list.css';
import Task from '../task';
import PropTypes from "prop-types"; // Импортируем компонент Task

export default class TaskList extends Component {
    render() {
        const { todos, onDeleted, onToggleDone } = this.props;

        return (
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Task
                        key={todo.id}
                        description={todo.description}
                        createdAt={todo.createdAt}
                        done={todo.done}
                        onDeleted={() => onDeleted(todo.id)}
                        onToggleDone={() => onToggleDone(todo.id)}
                    />
                ))}
            </ul>
        );
    }
}

TaskList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleted: PropTypes.func.isRequired,
    onToggleDone: PropTypes.func.isRequired
};