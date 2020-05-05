import React from "react";
import "./Todo.css"



class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            task: "",

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




    render() {

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
                <button onClick={this.props.removeItem}>Clear Completed</button>
            </form >
        )
    }
}
export default TodoForm;