import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.css'

const TodoList = ({ todos, deleteTodo, toggleCompleted, visibilityFilter }) => {
    // let todosToshow = todos

    // switch (visibilityFilter) {
    //     case 'show_todo':
    //         todosToshow = todos.filter(todo => todo.toggleCompleted === false)
    //         return
    //     case 'show_done':
    //         todosToshow = todos.filter(todo => todo.toggleCompleted)
    //         return
    //     default:
    //         break
    // }

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} />
            ))}
        </ul>
    )
}

export default TodoList
