import React,{Component} from 'react';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      titulo: "",
      responsable: "",
      descripcion: "",
      prioridad: "low",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    console.log(e.target.name, e.target.value);
  }

  handleSubmit(e){
      e.preventDefault();
      this.props.onAddTodo(this.state);
      console.log(this.state);
  }
  render() {
    return (
      <div className="card">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="titulo"
              className="form-control"
              placeholder="Titulo"
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsable"
              className="form-control"
              placeholder="Responsable"
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="descripcion"
              className="form-control"
              placeholder="Descripción"
              onChange={this.handleInput}
            />
          </div>
          <select
            name="prioridad"
            className="form-control"
            onChange={this.handleInput}
          >
            <option>low</option>
            <option>medium</option>
            <option>high</option>
          </select>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;