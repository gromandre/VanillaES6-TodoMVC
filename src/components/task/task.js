import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './task.css';
import { formatDistance } from 'date-fns';

export default class Task extends Component {
  state = {
    isEditing: false,
  };

  handleEditClick = () => {
    this.setState({ isEditing: true });
  };

  render() {
    const { description, createdAt, onDeleted, onToggleDone, done } = this.props;
    const { isEditing } = this.state;

    // Формируем классы для li
    let classNameLi = done ? 'completed' : 'active';
    if (isEditing) {
      classNameLi += ' editing';
    }

    // Получаем разницу в миллисекундах
    const createdDate = new Date(createdAt);
    const now = new Date();
    const timeDifference = now - createdDate; // разница в миллисекундах

    let timeAgo = '';

    // Если прошло меньше 60 секунд, показываем точное количество секунд
    if (timeDifference < 60000) {
      const seconds = Math.floor(timeDifference / 1000); // переводим в секунды
      timeAgo = `${seconds} seconds ago`;
    } else {
      // Иначе используем формат "X minutes ago"
      timeAgo = formatDistance(createdDate, now, { addSuffix: true });
    }

    return (
      <li className={classNameLi}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={done} onChange={onToggleDone} />
          <label>
            <span className="description">{description}</span>
            <span className="created"> created {timeAgo}</span>
          </label>
          <button className="icon icon-edit" onClick={this.handleEditClick}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        {isEditing && (
          <input
            type="text"
            className="edit"
            defaultValue={description}
            onBlur={(e) => {
              if (e.target.value.trim()) {
                this.props.onChangeDescription(e.target.value);
              }
              this.setState({ isEditing: false });
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.target.value.trim()) {
                this.props.onChangeDescription(e.target.value);
                this.setState({ isEditing: false });
              }
              if (e.key === 'Escape') {
                this.setState({ isEditing: false });
              }
            }}
            autoFocus
          />
        )}
      </li>
    );
  }
}

Task.defaultProps = {
  description: 'No description',
  createdAt: new Date().toISOString(),
  done: false,
  onDeleted: () => {},
  onToggleDone: () => {},
  onChangeDescription: () => {},
};

Task.propTypes = {
  description: PropTypes.string,
  createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  done: PropTypes.bool,
  onChangeDescription: PropTypes.func,
};
