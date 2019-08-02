import React, {useState, useEffect} from 'react';
import TodoAdd from './TodoAdd';
import TodoItem from './TodoItem'

export default function TodoList () {
    const [formInput, setFormInput] = useState('input a affair ');
    const [todoArray, setTodoArray] = useState(['example: write a todo list','cccc']);
    useEffect(() => {
        document.title = `TodoList`;
    });

    const handleChange = (input) => {
        setFormInput(input);
    };

    const handleAdd = () => {
        const t = [...todoArray];
        t.push(formInput);
        setTodoArray(t);

    };

    const handleRemove = (index) => {
        const t = [...todoArray];
        t.splice(index,1);
        setTodoArray(t);
    };

    const todoItems = todoArray.map((affair,index) =>
        <TodoItem
            key = {index}
            value = {affair}
            index = {index}
            onDelete = {handleRemove}
        />);

    return (
        <>
            <TodoAdd
                value = {formInput}
                onAddChange = {handleChange}
                onAddSubmit = {handleAdd}
            />
            <ul>
                {todoItems}
            </ul>
        </>
    )

}

