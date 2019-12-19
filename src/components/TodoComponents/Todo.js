import React from 'react';

import './Todo.css'

const Todo = props => {

    return (
        <div onClick={() => props.completedTask(props.todo.id)}>
            <p className={`${props.todo.completed ? 'completed' : ''} task`}>{props.todo.task}</p>
        </div>
    )
}

export default Todo;