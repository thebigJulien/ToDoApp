import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class ToDoForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { todo: '' };
    }
    

    handleSubmit = (e) => {
        e.preventDefault();
    
        // Create a new todo
        let newTodo = {
          status: false,
          _id: uuidv4(),
          text: this.state.todo,
          date: new Date(),
        };
    
        // Clean up the form
        this.setState({ todo: '' });
    
        // Pass the new todo to the parent
        this.props.addTodo(newTodo);
      };

      handleChange = (e) => {
        this.setState({ todo: e.target.value });
  };
    render() {



        return(
            <form onSubmit={this.handleSubmit} >
                <input placeholder="write something" onChange={this.handleChange}></input>
                <button>ADD</button>
            </form>
        )
    }
    
}

export default ToDoForm