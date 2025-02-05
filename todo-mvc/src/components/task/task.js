import React, {Component} from "react";
import './task.css';

export default class Task extends Component {
    render() {
        const { status, description, created } = this.props;

        return (
            <li className={status}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={status === 'completed'}
                        onChange={() => console.log("Чекбокс изменен")}
                    />
                    <label>
                        <span className="description">{description}</span>
                        <span className="created">{created}</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy"></button>
                </div>
                {status === 'editing' && (
                    <input
                        type="text"
                        className="edit"
                        value={description}
                        onChange={(e) => console.log("Новое описание:", e.target.value)}
                    />
                )}
            </li>
        );
    }
}