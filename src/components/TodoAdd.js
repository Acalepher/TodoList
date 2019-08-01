import React, {Component} from 'react';

export default class TodoAdd extends Component {
    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.props.onAddChange(e.target.value);
    }

    handleSubmit(){
        this.props.onAddSubmit();
    }

    render(){
        return (
            <div>
                <input
                    value = {this.props.value}
                    onChange = {(event) => this.handleChange(event)}
                />
                <button onClick={this.handleSubmit}>
                    Submit
                </button>

            </div>
        )
    }

}