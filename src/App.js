import React from 'react';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import Todo from "./components/Todo"


export const tasks = [

  {

    task: "Add list items below",
    id: 1,
    completed: false,

  }


]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {


    super();
    this.state = {
      name: "Guillermo",
      task: tasks,


    };


  }


  addTask = (taskName) => {


    const newTask = {

      task: `- ${taskName}`,
      id: Date.now(),
      completed: false,
    };

    this.setState({

      task: [...this.state.task, newTask]

    });

  }



  toggleItem = id => {
    const newTodoList = this.state.task.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    // update todoList
    this.setState({
      ...this.state,
      task: newTodoList
    });
  };

  removeItem = (e) => {
    e.preventDefault();

    this.setState({
      ...this.state,
      task: this.state.task.filter((item) => !item.completed)
    })
  }

  render() {
    return (
      <div className="toDoApp">
        <h2>Welcome to your To-do App, {this.state.name}</h2>

        <TodoForm propsTask={this.state.task} addTask={this.addTask} removeItem={this.removeItem} />
        <TodoList propsTask={this.state.task} toggleItem={this.toggleItem} />


      </div>
    );
  }
}

export default App;
