// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

const TodoList = props => {

    return (
        <div>
            {props.todoList.map(todo => (
                <Todo completedTask={props.completedTask} key={todo.id} todo={todo} />
            ))}
            <button onClick={() => props.clearCompleted(props.todoList.id)}>
                    Clear Completed
            </button>
        </div>
    )
}

export default TodoList;