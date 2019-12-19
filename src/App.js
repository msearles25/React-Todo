import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const toDoList = [
    {
      task: 'no',
      id: 1,
      completed: false
    },
    {
      task: 'yes',
      id: 2,
      completed: false
    },
    {
      task: 'maybe?',
      id: 3,
      completed: false
    }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      toDoList: toDoList,
      completed: false
    }
  }

  completedTask = id => {
    this.setState({
      toDoList: this.state.toDoList.map(task => {
        if (task.id === id) {
          return ({
             ...task, completed: !task.completed
          });
        }
        else {
          return task;
        }
      })
  })
}

clearCompleted = () => {
    const filteredItems = this.state.toDoList.filter(item => {
      return item.completed === false
    })
    this.setState({
      toDoList: filteredItems,
    })
}

  addTodo = newTodoText => {
    const newTodoItem = {
      task: newTodoText,
      id: Date.now(),
      completed: false
    }
    this.setState({
      toDoList: [...this.state.toDoList, newTodoItem]
    })

  }

  render() {
    return (
      <div className='App'>
        <div className='todoContainer'>
          <h2 className='title'>Welcome to your Todo App!</h2>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList 
          todoList={this.state.toDoList} 
          completedTask={this.completedTask} 
          clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
