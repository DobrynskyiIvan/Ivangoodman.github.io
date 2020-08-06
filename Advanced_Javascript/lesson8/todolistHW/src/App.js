import React from 'react';
import TodoList from "./TodoList";
import NewTodo from "./NewTodo";
import {defaultState} from './data';
import Filter from './Filter';
import './App.css'

class App extends React.Component {
    state = {
        todos: defaultState,
        listToshow:[],
        value:'',
      searchTerm: ''
     }

    addTodo = newTodo => this.setState(({todos}) => ({
        todos: [newTodo, ...todos]
    }))

    removeTodo = id => this.setState(({todos}) => ({
        todos: todos.filter(todo => todo.id !== id)
    }))

    toggleTodo = toggledTodo => this.setState(({todos}) => ({
        todos: todos.map(todo => todo.id !== toggledTodo.id
            ? todo : {...toggledTodo, completed: !toggledTodo.completed}
        )
    }))

    markAllCompleted = () => this.setState(({ todos }) => ({
        todos: todos.map(todo => ({ ...todo, completed: true}))
    }))

    markAllActive = () => this.setState(({ todos }) => ({
        todos: todos.map(todo => ({ ...todo, completed: false}))
    }))
    
     get getFiltered() {
        const { searchTerm,todos } = this.state;
      

        return todos
            .filter(todo =>
                todo.value.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            )
           
    }
   
    
     addSearchTerm = ({ target }) => {  
         this.setState({  value:  target.value  
        }) }

                
    handleSearch=()=>{
        this.setState({  searchTerm: this.state.value })  
    }
    componentDidUpdate(prevProps, prevState ){
        
        if (( prevState.searchTerm.length>1) & (prevState.searchTerm.length===this.state.searchTerm.length)) {
        
            this.setState({  searchTerm: '' ,value:''}) }
        }
    
    render() {
       
        const todos =this.getFiltered;
         const completedTodos = todos.filter(todo => todo.completed)
        const activeTodos = todos.filter(todo => !todo.completed)

        return (
            <div className={"container"}>
                    <Filter 
                    placeholder={'Search in all list....'}
                    searchTerm={this.state.value}
                    onChange={this.addSearchTerm  }/>
                    <button onClick={this.handleSearch} className={"btn btn-success btn-lg btn-block"} > Search in All list</button>
                 { this.getFiltered.length==0? <h3 > Not found elements!!!</h3>:null} 
                <h2>TODO list:</h2>
                <br/>
                <NewTodo addTodo={this.addTodo}/>

                <div className={"row"}>
                    <div className={"col-md-5"}>{
                        activeTodos.length===0?<p>List is empty!</p>:
                        <TodoList
                        title={"Active todos"}
                        todos={activeTodos}
                        removeTodo={this.removeTodo}
                        toggleTodo={this.toggleTodo}
                    />

                    }
                        
                    </div>
                    <div className={"offset-md-2 col-md-5"}>
                        <TodoList
                            title={"Completed todos"}
                            todos={completedTodos}
                            removeTodo={this.removeTodo}
                            toggleTodo={this.toggleTodo}
                        />
                    </div>
                </div>

                <button className={"btn btn-success btn-lg btn-block"} onClick={this.markAllCompleted}>
                    Complete all todos
                </button>
                <button className={"btn btn-danger btn-lg btn-block"} onClick={this.markAllActive}>
                    Mark all as active
                </button>
            </div>
        );
    }

}

export default App;
