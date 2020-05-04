import React from "react";

function TodoForm(props) {



    return (
        <div>

            <input onChange={props.propsHandleChange} placeholder="New Task..." />
        &nbsp;
            <button> + Add</button> &nbsp;
            <br />
            <button>Clear Completed</button>
        </div>
    )
}
export default TodoForm;