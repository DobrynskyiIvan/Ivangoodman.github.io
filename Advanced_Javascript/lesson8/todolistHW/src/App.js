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
        notfound:false,
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
    search = ( ) => {
            const {todos}=this.state;
            let founded= todos.filter(item => {
                return item['value'].toLowerCase().includes(this.state.searchTerm.toLowerCase())

            })
        this.setState({ 
            listToshow: founded,
             searchTerm: '',
             notfound:founded.length===0
         }
         )

     } 
   
     componentDidUpdate(prevProps, prevState ){
       
        if (( prevState.listToshow.length>1) & (prevState.listToshow.length===this.state.listToshow.length)) {
         
            this.setState({  listToshow:  [] }) }
          }
      
    
    
     addSearchTerm = ({ target }) => {  
         this.setState({  searchTerm:  target.value }) }

            

    render() {
       
        const todos =   this.state.listToshow.length>1? this.state.listToshow : this.state.todos;
     
       
     
       
        const completedTodos = todos.filter(todo => todo.completed)
        const activeTodos = todos.filter(todo => !todo.completed)

        return (
            <div className={"container"}>
                    <Filter 
                    placeholder={'Search in all list....'}
                    searchTerm={this.state.searchTerm}
                    onChange={this.addSearchTerm  }/>
                    <button onClick={this.search} className={"btn btn-success btn-lg btn-block"} > Search in All list</button>
                 { this.state.notfound? <h3 > Not found elements!!!</h3>:null} 
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
