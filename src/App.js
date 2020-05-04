import React from 'react';
import TodoForm from "./components/TodoForm"

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {


    super();
    this.state = {
      name: "Guillermo",
      task: "",
      id: Date.now(),
      completed: false,

    };


  }

  handleChange = e => {
    this.setState({ task: e.target.value });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your To-do App, {this.state.name}</h2>

        <TodoForm propsTask={this.state.task} propsHandleChange={this.handleChange} />


      </div>
    );
  }
}

export default App;
