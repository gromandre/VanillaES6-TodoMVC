import React from "react";
import './footer.css';
import Filters from '../filters';

const Footer = ({ taskCount }) => {

    return (
        <footer className="footer">
            <span className="todo-count">{taskCount} items left</span>
            <Filters />
            <button className="clear-completed">Clear completed</button>
        </footer>
    );
}

export default Footer;