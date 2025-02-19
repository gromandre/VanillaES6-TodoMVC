import React, { Component } from 'react';
import './app.css';
import AppHeader from '../app-header';
import TaskList from '../task-list';
import Footer from '../footer';
// import { intervalToDuration, formatDistance } from 'date-fns';

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [this.createTask('Completed task'), this.createTask('Editing task'), this.createTask('Active task')],
    filter: 'all',
  };

  createTask(text) {
    return {
      description: text,
      createdAt: new Date(),
      id: this.maxId++,
      done: false,
    };
  }

  deleteTask = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);

      const newArr = [...todoData.slice(0, index), ...todoData.slice(index + 1)];

      return {
        todoData: newArr,
      };
    });
  };

  addTask = (text) => {
    const newTask = this.createTask(text);

    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, newTask],
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);
      const oldTask = todoData[index];
      const newTask = { ...oldTask, done: !oldTask.done };

      const newArr = [...todoData.slice(0, index), newTask, ...todoData.slice(index + 1)];
      return {
        todoData: newArr,
      };
    });
  };

  deleteTasksCompleted = () => {
    this.setState(({ todoData }) => {
      const newArr = todoData.filter((el) => !el.done);

      return {
        todoData: newArr,
      };
    });
  };

  setFilter = (filter) => {
    this.setState({ filter });
  };

  filterTasks = (tasks, filter) => {
    switch (filter) {
      case 'active':
        return tasks.filter((task) => !task.done);
      case 'completed':
        return tasks.filter((task) => task.done);
      default:
        return tasks;
    }
  };

  changeDescription = (id, newDescription) => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.map((item) => {
          if (item.id === id) {
            return { ...item, description: newDescription };
          }
          return item;
        }),
      };
    });
  };

  render() {
    const { todoData, filter } = this.state;
    const filteredTasks = this.filterTasks(todoData, filter);

    const taskCount = todoData.filter((el) => {
      return !el.done;
    }).length;

    return (
      <>
        <AppHeader onTaskAdded={this.addTask} />
        <section className="main">
          <TaskList
            todos={filteredTasks}
            onDeleted={this.deleteTask}
            onToggleDone={this.onToggleDone}
            onChangeDescription={this.changeDescription}
          />
          <Footer
            taskCount={taskCount}
            filter={filter}
            setFilter={this.setFilter}
            deleteTasksCompleted={this.deleteTasksCompleted}
          />
        </section>
      </>
    );
  }
}
