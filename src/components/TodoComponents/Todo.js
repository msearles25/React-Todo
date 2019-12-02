import React from 'react';

const Todo = props => {

    const completedTask = () => {
        console.log(props.todo.completed)
    }

    return (
        <div>
            <p onClick={completedTask}>{props.todo.task}</p>
        </div>
    )
}

export default Todo;