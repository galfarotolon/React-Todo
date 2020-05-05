import React from "react";
import Todo from "./Todo.js";


function TodoList(props) {


    console.log(props.propsTask);


    return (
        <div>
            {props.propsTask.map((item) => (

                <Todo
                    key={item.id}
                    task={item}
                    toggleItem={props.toggleItem}
                />

            ))}



        </div>

    )

}

export default TodoList;