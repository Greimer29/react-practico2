import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoForm from './components/Todo.form';
import {todos} from './todos.json';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos,
      titulo:"My Tasks"
    }
  }
  render(){
    const todos = this.state.todos.map((todo,i)=>{
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.titulo}</h3>
              <span className="badge badge-pill bg-danger ml-2">
                {todo.prioridad}
              </span>
            </div>
            <div className="card-body">
              <p> {todo.descripcion} </p>
              <p>
                <mark>{todo.responsable}</mark>
              </p>
            </div>
          </div>
        </div>
      );
    })
    return(
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="/"className="text-white">
              {this.state.titulo}
              <span className="badge badge-light">
                {this.state.todos.length}
              </span>
          </a>
        </nav>
            <TodoForm/>
        <div className="container">
          <div className="row mt-4">
            {todos}
          </div>
        </div>
      </div>
    )
  }
}


export default App;
