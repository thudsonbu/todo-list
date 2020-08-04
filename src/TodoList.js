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
        this.toggleCompletion = this.toggleCompletion.bind(this);
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
    editItem(id, editedContent){
        const editedItems = this.state.items.map(item => {
            if(item.id === id){
                return { ...item, content: editedContent }
            }
            return item;
        });
        this.setState({ items: editedItems });
    }
    toggleCompletion(id){
        const editedItems = this.state.items.map(item => {
            if(item.id === id){
                return { ...item, completed: !item.completed };
            }
            return item;
        });
        this.setState({ items: editedItems });
    }
    render() {
        const items = this.state.items.map(item => (
            <TodoItem 
                key = {item.id}
                id = {item.id}
                content = {item.content}
                completed = {item.completed}
                removeItem = {this.removeItem}
                editItem = {this.editItem}
                toggleItem = {this.toggleCompletion}
            />
        ));
        return (
            <div className="TodoList">
                <h1>To Do List</h1>
                <ul>
                    {items}
                </ul>
                <NewItemForm addItem={this.addItem}/>
            </div>
        )
    }
}

export default TodoList;