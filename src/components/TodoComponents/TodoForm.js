import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            test: ''
        }
    }
    
    render() {
        return (
            <form>
                <input type='text'/>
            </form>
        )
    }
}

export default TodoForm;