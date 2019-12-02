import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList';

const toDoList = []

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      toDoList: toDoList
    }
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
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTodo={this.addTodo}/>
        </div>
        <TodoList todoList={this.state.toDoList} />
      </div>
    );
  }
}

export default App;
