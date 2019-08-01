import React, {Component} from 'react';
import TodoAdd from './TodoAdd';
import TodoItem from './TodoItem'

export default class TodoList extends Component  {
    constructor (props) {
        super(props);
        this.state = {TodoName: '', TodoArray: []};
    }


    handleChange = (input) => {
        this.setState({TodoName: input});
    };

    handleAdd = () => {
        const t = this.state.TodoArray;
        t.push(this.state.TodoName);
        this.setState({TodoArray: t});
    };

    handleRemove = (index) => {
        const t = this.state.TodoArray;
        t.splice(index,1);
        this.setState({TodoArray: t});
    };

    render () {
        const todoItems = this.state.TodoArray.map((affair,index) =>
            <TodoItem
                key = {index}
                value = {affair}
                index = {index}
                onDelete = {this.handleRemove}
            />)
        return (
            <>
                <TodoAdd
                    value = {this.state.TodoName}
                    onAddChange = {this.handleChange}
                    onAddSubmit = {this.handleAdd}
                />
                <ul>
                    {todoItems}
                </ul>
            </>
        )
    }


}

