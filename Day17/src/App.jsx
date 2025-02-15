import { useState } from 'react'
import './App.css'
import TodoInput from './components/todoInput'
import ListTodo from './components/ListTodo';

function App() {
  const [todoList, setTodolist] = useState([]);
  const handleAdd = (inputText)=>{
    setTodolist([...todoList, inputText]);

  }
  const handleDelete = (Key) =>{
    let newList= [...todoList];
    newList.splice(todoList.indexOf(Key), 1);
    setTodolist([...newList]); 


  }

  return (
    <>
      <h1>Todo APP.</h1>
      <TodoInput  handleAdd ={handleAdd}/>
      {todoList.map((listItem,i)=>{
        return(
          <ListTodo Key={i} handleDelete={handleDelete} index={i}  items={listItem}/>

        )
      })}
    </>
  )
}

export default App
