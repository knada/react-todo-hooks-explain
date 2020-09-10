import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.css'

const TodoList = ({ todos, deleteTodo, toggleCompleted, visibilityFilter }) => {
    if (visibilityFilter === 'show_todo') {
        return (
            <ul className="todo-list">
                {todos
                    .filter(todo => todo.completed === false)
                    .map(todo => (
                        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} />
                    ))}
            </ul>
        )
    }
    if (visibilityFilter === 'show_done') {
        return (
            <ul className="todo-list">
                {todos
                    .filter(todo => todo.completed)
                    .map(todo => (
                        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} />
                    ))}
            </ul>
        )
    }
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} />
            ))}
        </ul>
    )
}

export default TodoList
