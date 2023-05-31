import React, { useState } from "react";
import NewTodoList from "./NewTodoList";

const Todo = (props) => {
   
    const [users , setUsers] = useState();
   
    async function fetchTodoItems (index){
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${index}`);
        const result = await res.json();
        setUsers(result);
        // console.log(users);
    }

    return(
        <tr>
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td>{props.completed}</td>
            <td><button onClick={() => fetchTodoItems(props.id)}>View Users</button></td>
            <td>
                {
                    <div>
                        <h5>id: {users.title}</h5>
                    </div>
                }
            </td>


            {/* <NewTodoList  users={users}/> */}
        </tr>
    )
};

export default Todo;