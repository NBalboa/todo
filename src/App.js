import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';


function App() {
  const [todos, setTodos] = useState([])
  const [showForm, setShowForm] = useState(false)

  const deleteTodos = (id) => {
    const new_todo = todos.filter(todo => {
      return todo.id !== id
    })

    setTodos(new_todo)
  }

  const addTodos = (title, note, urgency) => {
    setTodos(prevTodo => {
      const new_id = prevTodo.length + 1
      return [...prevTodo, {id: new_id, title: title ,text: note, priority: urgency, status: false}]
    })
  }

  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.status = !todo.status

    setTodos(newTodos)
    // console.log(newTodos)
  }

  const deleteComplete = () => {
    const new_todo = todos.filter(todo => !todo.status)
    // console.log(new_todo)
    setTodos(new_todo)
  }


  return (
    <div className='container w-100'>

      <div className='container-fluid h-100'>
        <Header btn="Close"/>
        <AddTodo onAdd={addTodos}/>
        <button className='btn btn-danger' onClick={deleteComplete} id="hidCom">Clear Complete</button>
      </div>
      <Todos todos={todos} onDelete={deleteTodos} onCheck={toggleTodo}/>

    </div>
  );
}

export default App;
