import React from 'react'
import './TodoItem.css'

const TodoItem = ({ todo, deleteTodo, toggleCompleted }) => {
    const handleDelete = () => {
        deleteTodo(todo.id)
    }

    return (
        <li className="todo-item">
            <input type="checkbox" checked={true} />
            <p className="todo-text">{todo.text}</p>
            <button className="todo-delete-button" onClick={handleDelete}>
                x
            </button>
        </li>
    )
}

export default TodoItem
