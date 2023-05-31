import './App.css';
import { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import NewTodoList from './components/NewTodoList';


function App() {

  // const dummy =[
  //     {
  //       "userId": 1,
  //       "id": 1,
  //       "title": "delectus aut autem",
  //       "completed": "false"
  //     },
  //     {
  //       "userId": 1,
  //       "id": 2,
  //       "title": "quis ut nam facilis et officia qui",
  //       "completed": false
  //     },
  //     {
  //       "userId": 1,
  //       "id": 3,
  //       "title": "fugiat veniam minus",
  //       "completed": false
  //     },
  // ]
 
  const [todos , setTodos] = useState([]);

  // async function fetchTodos() {
  //    fetch("https://jsonplaceholder.typicode.com/todos")
  //    .then((response)=>
  //    {
  //       return response.json();
  //    })
  //    .then((data)=> 
  //    {
  //     setTodos(data);
  //    })
    
  //  }

useEffect(()=>{
 const fetchTodos = async ()=> {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
    const result = await res.json();
    setTodos(result);
  }
  fetchTodos();
},[]);
  // async function fetchTodos() {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
  //   const result = await res.json();
  //   setTodos(result);
  // }
 return(
  <div>

    {/* <button onClick={fetchTodos}>Fetch Todo</button> */}
    <TodoList todos ={todos} />
    
  </div>
 )

}

export default App;
