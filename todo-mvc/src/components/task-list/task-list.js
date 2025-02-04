import React from "react";
import './task-list.css';
import Task from '../task'; // Импортируем компонент Task

const TaskList = ({ todos }) => {
    return (
        <ul className="todo-list">
            {todos.map((todo, index) => (
                <Task
                    key={index}
                    status={todo.status}
                    description={todo.description}
                    created={todo.created}
                />
            ))}
        </ul>
    );
};

export default TaskList;