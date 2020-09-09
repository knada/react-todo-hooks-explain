import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.css'

const TodoList = ({ todos, deleteTodo, toggleCompleted }) => (
    <ul className="todo-list">
        {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} />
        ))}
    </ul>
)

export default TodoList
