import React, {Component} from 'react';
import Todo from './Todo';
import Filter from './Filter';

class TodoList extends Component {
    state = {
        searchTerm: ''
    };
 
    get getBody() {
        const { searchTerm } = this.state;
        const { todos, removeTodo, toggleTodo } = this.props;

        return todos
            .filter(todo =>
                todo.value.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            )
            .map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                />
            ))
    }
    search = ({ target }) => {
         
          this.setState({
            searchTerm:target.value
           })

       }


    render() {
        const {title} = this.props;

        return (
            <section>
                
                <h3 className={"mb-3"}>{title}</h3>
               {this.props.todos.length >=2? <Filter 
                onChange={this.search}
                placeholder={'Search in current list....'}/>:null}
                <ul className={"list-group mb-3"}>{this.getBody}</ul>
            </section>
        )
    }
}

export default TodoList;
