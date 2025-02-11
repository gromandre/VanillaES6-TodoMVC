import React, { Component } from "react";
import PropTypes from 'prop-types';
import './app-header.css'

export default class AppHeader extends Component {
    render() {
        const { onTaskAdded } = this.props;

        return (
            <header className="header">
                <h1>todos</h1>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && e.target.value) {
                            onTaskAdded(e.target.value);
                            e.target.value = ""; // Очистка поля
                        }
                    }}
                />
            </header>
        )
    }
};

AppHeader.defaultProps = {
    onTaskAdded: () => {}
};

AppHeader.propTypes = {
    onTaskAdded: PropTypes.func
};
