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
        this.setState({
            items: [...this.state.items, newItem]
        });
    }
    removeItem(id) {
        console.log("Trying to Remove" + id);
        this.setState({
            items: this.state.items.filter(item => item.id !== id)
        });
    }
    editItem(id){

    }
    render() {
        const items = this.state.items.map(item => (
            <TodoItem 
                content = {item.content}
                removeItem = {() => this.removeItem(item.id)}
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