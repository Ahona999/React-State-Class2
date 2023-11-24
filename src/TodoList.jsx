import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4(), isDone: false}]);// this is for sample at first there will be no task // for adding tasks
    let [newTodo, setNewTodo] = useState("");// This is created for updating new tasks// Reamins empty cz tasks are custom for indiv.// and will be updated

    let addNewTask = () => {
        setTodos((prevTodos) => {
           return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }]
        });//bringing chnge in arr

        setNewTodo("");
    }

    let updateNewValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

    let markAllDone = () => {
        setTodos( (prevTodos) => (
            prevTodos.map((todo) => {
            return {
                ...todo,
                isDone : true,
            };
        })
      ));
    };

    let markAsDone = (id) =>{
        setTodos( (prevTodos) => (
            prevTodos.map((todo) => {// checking for each single todo
                if(todo.id == id) {/// todo.id = uppercase id
                    return {
                        ...todo,
                       isDone: true,
                    };
                } else {
                    return todo;
                }
            })
      ));
    }

    return (
        <div>
            <input placholder = "Add a Task" value={newTodo} onChange={updateNewValue}/> 
            <br></br>
            <br></br>

            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>

            <hr></hr>
            <h4>Tasks to do -</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                    <span style= {todo.isDone ? {textDecoration : "line-through"} : {} }> {todo.task} </span>   
                    <button onClick = {() => deleteTodo(todo.id)}> Delete </button>
                    <button onClick={() => markAsDone(todo.id)}> Mark As Done </button>
                    </li>
                ))}
            </ul>

            <br></br>
            <button onClick={markAllDone}>Mark all as Done</button>
        </div>
    );
}




let generateTicketNumber = () => {
    const min = 100;
    const max = 500;
    const randomNumber = Math.floor(Math.random() * max - min);
    setRandomNumber(randomNumber);
  }
  
  let sumOfDigits = () => {

  }


