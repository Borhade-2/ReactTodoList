import React from "react";
import Todo from "./Todo";
import NewTodo from "./NewTodo";

const NewTodoList = (props) => {
    console.log(props.users);
    
    return(
        <div>
                {/* {
                  <div> 
                   Todo ID : {props.users.id}
                    Todo name : {props.users.name}
                    Todo username : {props.users.username}
                    Todo phone : {props.users.phone}
                    Todo website : {props.users.website}
                </div>
            } */}
            </div>
    )
};

export default NewTodoList;