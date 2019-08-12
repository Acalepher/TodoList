import React from 'react';

export default function TodoItem(props){

    const handleDelete = props.onDelete;


    return (
        <li>
            <span
                style={{textDecoration: isAccomplished ? "line-through":"none"}}
                onClick = {
                    () => {
                        isAccomplished ?
                            setIsAccomplished(false) : setIsAccomplished(true)
                    }
                }
            >
                {props.value}
            </span>
            <label
                onClick = {handleDelete}
                style={{color: "#7d0000"}}
            >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DELETE
            </label>
        </li>
    )

}