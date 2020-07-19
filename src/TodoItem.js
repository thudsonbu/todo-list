import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            content: this.props.content
        }
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleRemove(evt){
        console.log(this.id);
        this.props.removeItem(this.props.id);
    }
    toggleEdit(){
        this.setState({editing: !this.state.editing});
    }
    handleEdit(evt){
        evt.preventDefault();
        console.log("handle edit");
        this.props.editItem(this.props.id, this.state.content);
        this.toggleEdit();
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleToggle(evt){
        this.props.toggleItem(this.props.id);
    }
    render() {
        let display;
        if(this.state.editing){
            display = (
                <div>
                    <form onSubmit={this.handleEdit}>
                        <input 
                            type="text"
                            value={this.state.content}
                            name='content'
                            onChange={this.handleChange} />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            display = (
                <div>
                    <li className={this.props.completed ? 'item-completed' : ""}
                        onClick={this.handleToggle} 
                    >
                        {this.props.content}
                    </li>
                    <button onClick={this.handleRemove}>Delete</button>
                    <button onClick={this.toggleEdit}>Edit</button>
                </div>
            )
        }
        return display;
    }
}

export default TodoItem;