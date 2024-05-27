import React, {useState} from "react";


export default function Todo({todo, toggleTodo}) { 
    const [show, toggleShow] = useState(false)

    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    return (
        <div class='TodoList'>
            <label class="Todo">
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
                <span>{todo.name}</span>
            </label>
            <button onClick={() => toggleShow(!show)}>Edit</button>
            {show && <input type="text"/>}
        </div>
    )
}