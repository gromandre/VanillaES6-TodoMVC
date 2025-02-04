import React from "react";
import './task.css';

const Task = ({ status, description, created }) => {
    return (
        <li className={status}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={status === 'completed'} />
                <label>
                    <span className="description">{description}</span>
                    <span className="created">{created}</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>
            {status === 'editing' && (
                <input type="text" className="edit" value={description} />
            )}
        </li>
    );
};

export default Task;