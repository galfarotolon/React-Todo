import React from "react";
import "./Todo.css"



function Todo({ task, toggleItem }) {





    return (

        <div className={`item${task.completed ? ' purchased' : ''}`}>

            <p onClick={() => toggleItem(task.id)} >{task.task}</p>

        </div>
    )


}


export default Todo;