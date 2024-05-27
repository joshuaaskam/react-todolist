import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

const  LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  // Create state variables todos to store all todo items
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  // Retrieve todos from local storage on the launch of the app.
  useEffect(() =>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) // Must be parsed so it returns a list
    if(storedTodos) setTodos( prevTodos => [...prevTodos, ...storedTodos] );
  }, []) // Use empty array for deps so effect is only called once.
 
  // Store in local storage for persistence
  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos)) // Must be stringified to be stored in local storage
  },[todos]) // Anytime something in todos changes, use this effect.

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleEditTodo(id, name) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.name = name
    setTodos(newTodos)
  }

  function handleAddTodo() { 
     const name = todoNameRef.current.value
     if (name === '') return
     setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
     })
     todoNameRef.current.value = null
  }

  function handleKeyUp(e) {
    if(e.key === 'Enter'){
      handleAddTodo()
    }
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <h1 className='title'>To-Do List</h1>
      <div className='content'>
        <TodoList todos={todos} toggleTodo={toggleTodo} handleEditTodo={handleEditTodo} />
        <input type="text" onKeyUp={handleKeyUp} ref={todoNameRef} />
        <button onClick={handleAddTodo}>Add Item</button>
        <button onClick={handleClearTodos}>Clear Complete</button>
      </div>
      <div className="left-to-do">{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
