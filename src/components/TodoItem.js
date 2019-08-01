import React, {Component} from 'react';

export default class TodoItem extends Component {
    constructor (props) {
        super(props);
        this.state = {isAccomplished: false}
    }

    handleDelete = () =>{
        this.props.onDelete(this.props.index);
    };



    render(){
        return (
            <li>
                <span
                    style={{textDecoration: this.state.isAccomplished ? "line-through":"none"}}
                    onClick = {
                        () => {
                            this.state.isAccomplished ?
                                this.setState({isAccomplished: false}) : this.setState({isAccomplished: true})
                        }
                    }
                >
                    {this.props.value}
                    </span>
                <label onClick={this.handleDelete}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X
                </label>
            </li>
        )
    }

}