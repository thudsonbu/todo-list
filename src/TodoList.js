import React, { Component } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

class TodoList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            items: [{content: "potato"},{content: "tomato"},{content: "orange"}],
        }
    }

    addItem(newItem){
        this.setState({
            items: [...this.state.items, newItem]
        });
    }

    removeItem(id) {
        this.setState({
            items: this.state.items.filter(box => box.id !== id)
        });
    }

    editItem(id){
        
    }

    render() {
        const items = this.state.items.map(item => (
            <TodoItem 
                content = {item.content}
            />
        ));
        return (
            <div>
                <h1>To Do List</h1>
                {items}
            </div>
        )
    }
}

export default TodoList;