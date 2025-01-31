import React from "react";
import './app.css';
import AppHeader from '../app-header';
import TaskList from '../task-list';

const App = () => {
    return (
        <>
            <AppHeader />
            <section className="main">
                <TaskList />
                <footer className="footer">
                    <span className="todo-count">1 items left</span>
                    <ul className="filters">
                        <li>
                            <button className="selected">All</button>
                        </li>
                        <li>
                            <button>Active</button>
                        </li>
                        <li>
                            <button>Completed</button>
                        </li>
                    </ul>
                    <button className="clear-completed">Clear completed</button>
                </footer>
            </section>
        </>
    );
}

export default App;