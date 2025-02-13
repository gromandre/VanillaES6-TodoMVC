import React from 'react';
import PropTypes from 'prop-types';
import './footer.css';
import Filters from '../filters';

const Footer = ({ taskCount, filter, setFilter, deleteTasksCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{taskCount} items left</span>
      <Filters filter={filter} setFilter={setFilter} />
      <button className="clear-completed" onClick={deleteTasksCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;

Footer.defdefaultProps = {
  taskCount: 0,
  filter: 'all',
  setFilter: () => {},
  deleteTasksCompleted: () => {},
};

Footer.propTypes = {
  taskCount: PropTypes.number,
  filter: PropTypes.string,
  setFilter: PropTypes.func,
  deleteTasksCompleted: PropTypes.func,
};
