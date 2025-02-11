import React, { Component } from "react";
import './task-list.css';
import Task from '../task'; // Импортируем компонент Task

export default class TaskList extends Component {
    render() {
        const { todos, onDeleted } = this.props;

        return (
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <Task
                        key={index}
                        status={todo.status}
                        description={todo.description}
                        created={todo.created}
                        onDeleted={() => onDeleted(todo.id)}
                    />
                ))}
            </ul>
        );
    }
}