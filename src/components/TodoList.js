import React from 'react';
import TodoAdd from './TodoAdd';
import TodoItem from './TodoItem'
import {rmTodo, addTodo} from "../actions";

export default function TodoList () {

    const todoItems = state.todos.map((affair,index) =>
        <TodoItem
            key = {index}
            value = {affair}
            index = {index}
            onDelete = {dispatch(rmTodo(index))}
        />);

    return (
        <>
            <TodoAdd
                onSubmit = {dispatch(addTodo(value))}
            />
            <ul>
                {todoItems}
            </ul>
        </>
    )

}

