import React, { useState } from "react";
import Todo from "./Todo";
import Card from "./UI/Card";
import classes from "./TodoList.module.css";

const TodoList = (props) => {

    const [user , setUser] = useState('');
    const [hide , setHide] = useState(false);

    async function fetchdata (index){
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${index}`);
        const result = await res.json();
        setUser(result);
        setHide(true)
    }
    console.log(hide)
     console.log(user);
    
     const handleHide = () =>{
        setHide(false);
    }
    return(
        <>
        <table border="2">
            <thead>
                <tr>
                    <th>TodoID</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { 
                props.todos.map((todo,index) => (
                    <tr key={index}>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                        <td>{(todo.completed) ? 'true' : 'false'}</td>
                        <td><button onClick={()=> fetchdata(todo.id)}>View User</button></td>
                    
                    </tr>
                   
                ))}
            </tbody>
        </table>
       {hide && <Card className={classes.modal}>
            <>
                <header className={classes.header}>
                <h2>Display Data</h2>
            </header>
                <div className={classes.content}>
                
                   <h4 > ToDo ID : {user.id}</h4> 
                    <h4>ToDo Title: {user.name} </h4>
                    <h4>Username: {user.username}</h4>
                    <h4>Email : {user.email}</h4>
                    <h4>Phone: {user.phone}</h4>
                    <h4>Website: {user.website}</h4>
                 <footer className={classes.actions}>
                        <button onClick={handleHide}>Okay</button>
                 </footer>
                </div>
                </>
            
        </Card>
}
        </>
    )
};

export default TodoList;