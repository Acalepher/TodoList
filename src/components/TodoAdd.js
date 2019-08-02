import React from 'react';

export default function TodoAdd (props){

    const handleChange = (e) => {
        props.onAddChange(e.target.value);
    };

    const handleSubmit = () => {
        props.onAddSubmit();
    };

    return (
        <div>
            <input
                value = {props.value}
                onChange = {(event) => handleChange(event)}
            />
            <button onClick={handleSubmit}>
                Submit
            </button>

        </div>
    )

}