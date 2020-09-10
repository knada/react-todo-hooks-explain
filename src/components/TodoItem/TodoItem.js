import React from 'react'
import './TodoItem.css'

const TodoItem = ({ todo, deleteTodo, toggleCompleted }) => {
    const handleDelete = () => deleteTodo(todo.id)

    return (
        <li className="todo-item">
            <input
                className="todo-checkbox"
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompleted(todo.id)}
            />
            <p className="todo-text">{todo.text}</p>
            <button className="todo-delete-button" onClick={handleDelete}>
                delete!
            </button>
        </li>
    )
}

export default TodoItem
