import React,{Component} from 'react';
import logo from './logo.svg';
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
    this.handleAddTodo=this.handleAddTodo.bind(this)
  }

  handleAddTodo(todo){
    this.setState({
      todos:[...this.state.todos,todo]
    })
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
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="/" className="text-white">
            {this.state.titulo}
            <span className="badge badge-pill badge-light">
              {this.state.todos.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              <img src={logo} alt="elLogo"/>
              <TodoForm onAddTodo={this.handleAddTodo}/>
            </div>
            <div className="col-md-9">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}


export default App;
