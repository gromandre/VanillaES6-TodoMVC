import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './task.css';
import { formatDistance } from 'date-fns';

export default class Task extends Component {
  render() {
    const { description, createdAt, onDeleted, onToggleDone, done } = this.props;

    let classNameLi = done ? 'completed' : 'active';

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
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        {classNameLi === 'editing' && (
          <input
            type="text"
            className="edit"
            value={description}
            onChange={(e) => console.log('Новое описание:', e.target.value)}
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
  createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  done: PropTypes.bool,
  onChangeDescription: PropTypes.func,
};
