import React from "react";

const NewTodo = (props) => {

    return(
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.username}</td>
            <td>{props.phone}</td>
            <td>{props.website}</td>
        </tr>
    )
};

export default NewTodo;