import React, { Component } from 'react';
import './TodoItem.css';
import uuid from "uuid/dist/v4";

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleRemove(evt){
        this.props.removeItem(evt.target.id);
    }
    render() {
        return (
            <div className="TodoItem">
                <p>{this.props.content}</p>
                <button onClick={this.handleRemove}>Delete</button>
            </div>
        )
    }
}

export default TodoItem;