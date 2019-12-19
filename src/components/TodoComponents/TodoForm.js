import React from 'react';

class TodoForm extends React.Component {


    constructor() {
        super();
        this.state = {
           newTask: ''
        }
    }

    handelChange = e => {
        this.setState({ newTask: e.target.value })
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTask);
        this.setState({
            newTask: ''
        })
    }
    
    render() {
        return (
            <form className='addTodo' onSubmit={this.handleSubmit}>
                <input 
                    value={this.state.newTask}
                    onChange={this.handelChange}
                    type='text'
                    name='todo'
                />
                <button className='clearBtn'>
                    Add Todo
                </button>
            </form>
        )
    }
}

export default TodoForm;