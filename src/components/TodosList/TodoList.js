import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.css'

const TodoList = ({ todos }) => (
    <ul className="todo-list">
        {todos.map(todo => (
            <TodoItem key={todo.id} text={todo.text} completed={todos.completed} />
        ))}
    </ul>
)

export default TodoList
