import React from "react";

export default function Todo({todo, toggleTodo}) { 
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    return (
        <div class='TodoList'>
            <label class="Todo">
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
                <span contenteditable="true">{todo.name}</span>
            </label>
            <button>Edit</button>
        </div>
    )
}