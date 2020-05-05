import React from "react";
import "./Todo.css"



class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            task: "",
            completed: false,
        };
    }

    submitForm = e => {
        e.preventDefault();
        this.props.addTask(this.state.task);
        this.setState({
            task: "",

        });
    };

    handleChange = (e) => {
        this.setState({

            task: e.target.value

        })
    }

    removeItem = (e) => {
        e.preventDefault();

        this.setState({

            task: this.state.task.filter((listItem) => listItem.completed === true)
        })
    }


    render() {
        console.log(this.state.task)
        return (
            <form>

                <input
                    onChange={this.handleChange}
                    placeholder="New Task..."
                    type="text"
                    name="task"
                    value={this.state.task}

                />

                <button onClick={this.submitForm}> + Add</button >
                <br />
                <button onClick={() => this.removeItem}>Clear Completed</button>
            </form >
        )
    }
}
export default TodoForm;