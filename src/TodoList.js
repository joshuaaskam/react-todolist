import React from "react";
import Todo from "./Todo";

export default function TodoList({todos, toggleTodo, handleEditTodo}) { 
    return (
        // Map will loop over all todo elements
        todos.map(todo => {
            return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} handleEditTodo={handleEditTodo}/>
        })
    )
}