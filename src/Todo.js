import React, {useState, useRef} from "react";


export default function Todo({todo, toggleTodo, handleEditTodo}) { 
    const [show, toggleShow] = useState(false)
    const newTodoRef = useRef()

    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    function handleSave() {
        toggleShow(!show)
        const name = newTodoRef.current.value
        if (name === '') return
        handleEditTodo(todo.id, name)
        newTodoRef.current.value = null
    }

    return (
        <div className='TodoList'>
            <label className="Todo">
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
                <span>{todo.name}</span>
            </label>
            {show ? (
                <>
                    <input type="text" ref={newTodoRef}/>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => toggleShow(!show)}>Cancel</button>
                </>
            ) : (
                <button onClick={() => toggleShow(!show)}>Edit</button>
            )}
        </div>
    )
}