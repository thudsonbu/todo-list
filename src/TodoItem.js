import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleRemove(evt){
        console.log(this.id);
        this.props.removeItem(this.props.id);
    }
    render() {
        return (
            <div>
                <li className="TodoItem">
                    {this.props.content}
                </li>
                <button onClick={this.handleRemove}>Delete</button>
                <button onClick={this.handleEdit}>Edit</button>
            </div>
            
        )
    }
}

export default TodoItem;