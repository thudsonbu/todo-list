import React, { Component } from 'react';
import './TodoItem.css';
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
                <CSSTransition key='editing' timeout={500} classNames='form'>
                    <form className="Todo-edit-form" onSubmit={this.handleEdit}>
                        <input 
                            type="text"
                            value={this.state.content}
                            name='content'
                            onChange={this.handleChange} />
                        <button>Save</button>
                    </form>
                </CSSTransition>
            );
        } else {
            display = (
                <CSSTransition keys='normal' timeout={500} classNames="task-text">
                    <div className="Todo">
                        <li className={this.props.completed ? 'Todo-task completed' : "Todo-task"}
                            onClick={this.handleToggle} 
                        >
                            {this.props.content}
                        </li>
                    </div>
                </CSSTransition>
            );
        }
        return (
            <TransitionGroup
                className={this.props.completed ? "Todo completed" : "Todo"}
            >
                {display}
                <div className='Todo-buttons'>
                    <button onClick={this.toggleEdit}>
                        <i class='fas fa-pen' />
                    </button>
                    <button onClick={this.handleRemove}>
                        <i class='fas fa-trash'/>
                    </button>
                </div>
            </TransitionGroup>

        )
    }
}

export default TodoItem;