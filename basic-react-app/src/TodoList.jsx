import { useState } from "react";
import './TodoList.css'
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
let [todo , setTodo] = useState([{
    task: "sample-task",
    id: uuidv4(),
}]);
let [newTodo ,setNewTodo]=useState("");

let addNewTask =()=>{
    setTodo((prevTodo) =>{
        return[...todo ,{task:newTodo,id: uuidv4()}]
    });
    setNewTodo();
    
};
let updateTodoValue=(event)=>{
    setNewTodo(event.target.value)
};

let deleteTodo=(id)=>{
   setTodo((prevTodo)=>todo.filter((prevTodo)=> prevTodo.id != id));
};
   
let upperCaseAll=()=>{
  setTodo ( (prevtodo)=> (
    prevtodo.map((todo)=> {
        return{
            ...todo,
            task: todo.task.toUpperCase(),
        };
    
    })

));
const newfunc=()=>{
    console.log('clicked on it now')
}
const upperCaseOne = (id)=>{
    console.log('clicked on it')
    setTodo ( (prevtodo)=> (
        prevtodo.map((todo)=> {
            if(todo.id == id)
            {
                return{
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            }else{
                return  todo;
            }
        
        })
    
    ));
    
}
   


};
    return(
        <div>
            <h1> Todo-List</h1>
            <input placeholder="Enter your Task" value={newTodo}  onChange={updateTodoValue}/>
            <br/>  <br/>
            <button onClick={addNewTask}> Add Task </button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <hr/>
            <h4> Task </h4>
            <ul>
            {todo.map((todo)=>{
                return <li key={todo.id}>
                    <span> {todo.task} </span>
                    &nbsp;  &nbsp;   &nbsp;  
                    <button onClick={()=>deleteTodo(todo.id)}> delete</button> &nbsp;
                    <button onClick={()=>upperCaseOne(todo.id)}> Uppercaseone</button>
                    </li>
            })
            }
            </ul>

            <button onClick={()=>upperCaseAll()}>UpperCaseAll</button>


        </div>
    );
}