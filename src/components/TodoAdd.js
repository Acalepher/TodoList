import React from 'react';

export default function TodoAdd (props){

    const handleSubmit = props.onSubmit;

    return (
        <div>
            <input/>
            <button onClick={handleSubmit}>
                Submit
            </button>
        </div>
    )

}