import React, {Component} from "react";
import './task.css';

export default class Task extends Component {
    // state = {
    //   done: false
    // };



    render() {
        const { description, created, onDeleted, onToggleDone, done } = this.props;


        let classNameLi = done ? 'completed' : 'active';
//onChange={this.onChangeComplite}
        return (
            <li className={ classNameLi }>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={done}
                        onChange={onToggleDone}

                    />
                    <label>
                        <span className="description">{description}</span>
                        <span className="created">{created}</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy" onClick={onDeleted}></button>
                </div>
                {classNameLi === 'editing' && (
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