import React from "react";
import './app.css';
import AppHeader from '../app-header';
import TaskList from '../task-list';
import Footer from '../footer';

const App = () => {
    const todoData = [
        {
            //status: 'completed',
            description: 'Completed task',
            created: 'created 17 seconds ago'
        },
        {
            //status: 'editing',
            description: 'Editing task',
            created: 'created 5 minutes ago'
        },
        {
            //status: 'active',
            description: 'Active task',
            created: 'created 5 minutes ago'
        }
    ];

    return (
        <>
            <AppHeader />
            <section className="main">
                <TaskList todos={todoData} />
                <Footer />
            </section>
        </>
    );
};

export default App;