import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './task.css';
import { formatDistance } from 'date-fns';

export default function Task({ description, onDeleted, onToggleDone, completed, createdAt, onEdited }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(description);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdited(editValue);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsEditing(false);
      setEditValue(description);
    }
  };

  let className = '';
  if (completed) {
    className = 'completed';
  }
  if (isEditing) {
    className += ' editing';
  }

  return (
    <li className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={onToggleDone} checked={completed} />
        <label>
          <span className="description">{description}</span>
          <span className="created">created {formatDistance(createdAt, new Date(), { addSuffix: true })}</span>
        </label>
        <button className="icon icon-edit" onClick={() => setIsEditing(true)}></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
      {isEditing && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="edit"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSubmit}
            autoFocus
          />
        </form>
      )}
    </li>
  );
}

Task.propTypes = {
  description: PropTypes.string.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onEdited: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]).isRequired,
};
