import React, {Component} from "react";
import './task.css';

export default class Task extends Component {
    state = {
      done: false
    };

    onChangeComplite = () => {
        this.setState(({ done }) => ({
            done: !done
        }));
    }

    render() {
        const { description, created, onDeleted } = this.props;
        const { done } = this.state;

        let classNameLi = done ? 'completed' : 'active';

        return (
            <li className={ classNameLi }>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={done}
                        onChange={this.onChangeComplite}

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