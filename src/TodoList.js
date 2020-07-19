import React, { Component } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';
import NewItemForm from './NewItemForm';

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.editItem = this.editItem.bind(this);
    }
    addItem(newItem){
        console.log("Adding " + newItem.id);
        this.setState({
            items: [...this.state.items, newItem]
        });
    }
    removeItem(id) {
        console.log("Removing " + id);
        this.setState({
            items: this.state.items.filter(item => item.id !== id)
        });
    }
    editItem(id){

    }
    render() {
        const items = this.state.items.map(item => (
            <TodoItem 
                key = {item.id}
                id = {item.id}
                content = {item.content}
                removeItem = {this.removeItem}
            />
        ));
        return (
            <div>
                <h1>To Do List</h1>
                <NewItemForm addItem={this.addItem}/>
                {items}
            </div>
        )
    }
}

export default TodoList;