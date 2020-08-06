import React, {Component} from 'react';
import { generate as id } from 'shortid';

class NewTodo extends Component {
    state = {
        value: ''
    };

    handleChange = event => {this.setState({ value: event.target.value })}

    handleSubmit = event => {
        event.preventDefault();
        const { value } = this.state;

        this.props.addTodo({id: id(), value, completed: false})
        this.setState({value: ''});
    }

    render() {
        const { value } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-md-10">
                        <input
                            className="form-control mb-3"
                            type="text"
                            onChange={this.handleChange}
                            value={value}
                            placeholder='Type to add new todo...'
                        />
                    </div>
                    <div className="col-md-2">
                        <input className="btn btn-success" type="submit" value="Send" />
                    </div>
                </div>
            </form>
        )
    }
}

export default NewTodo;
