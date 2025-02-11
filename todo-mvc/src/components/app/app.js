import React, { Component } from "react";
import './app.css';
import AppHeader from '../app-header';
import TaskList from '../task-list';
import Footer from '../footer';

export default class App extends Component {
    state = {
        todoData : [
            {
                //status: 'completed',
                description: 'Completed task',
                created: 'created 17 seconds ago',
                id: 1
            },
            {
                //status: 'editing',
                description: 'Editing task',
                created: 'created 5 minutes ago',
                id: 2
            },
            {
                //status: 'active',
                description: 'Active task',
                created: 'created 5 minutes ago',
                id: 3
            }
        ]
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const index = todoData.findIndex((el) => el.id === id);

            const newArr = [
                ...todoData.slice(0, index),
                ...todoData.slice(index + 1)
            ];

            return {
                todoData: newArr
            }
        })
    };

    render() {
        return (
            <>
                <AppHeader />
                <section className="main">
                    <TaskList
                        todos={this.state.todoData}
                        onDeleted={this.deleteItem}
                    />
                    <Footer />
                </section>
            </>
        );
    }
};
