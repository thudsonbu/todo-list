import React, { Component } from 'react';
import uuid from "uuid/dist/v4";
import './NewItemForm.css';

class NewItemForm extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            content: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleSubmit(evt) {
        evt.preventDefault();
        const newItem  = { ...this.state, id: uuid(), completed: false };
        this.props.addItem(newItem);
        this.setState({
            content: "",
        });
    }
    render(){
        return(
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="task">New Todo</label>
                    <input 
                        type='text'
                        name='content'
                        placeholder="New Todo"
                        value={this.state.content}
                        onChange={this.handleChange}
                        id='content'
                    />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default NewItemForm;