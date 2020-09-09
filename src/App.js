// Import react into our app to use react features like JSX, this may not be necessary in future React versions(17+);
import React, { useState } from 'react'
// Import the various components we need to compose to complete the app.
import TodoInput from './components/TodoInput/TodoInput'
import TodosList from './components/TodosList/TodoList'
// Import css to be used into your app.
import './App.css'

function App() {
    const [todos, setTodos] = useState([])
    // useState is initialized with the inital state and returns a tuple, first item is the state and the second is update function for that state
    // we initialize the state with an array bcos our state will be a *list* of todos
    // We use the "destructuring assignment syntax" get our state and setState variables.

    const createNewTodo = text => {
        setTodos(() => {
            // our todo object should have a unique id, the text content and completed status.
            return [
                ...todos,
                {
                    id: Date.now(),
                    text, // shorthand for text: text in ES2015
                    completed: false
                }
            ]
        })
    }

    const deleteTodo = id => {
        //the filter function returns a new array of elements that meet the conditions passed to it
        //so we can use it to remove a todo from our state in a functional way.
        const newTodos = todos.filter(todo => id !== todo.id)
        setTodos(newTodos)
    }

    const toggleCompleted = id => {
        const todoIndex = todos.findIndex(todo => id === todo.id)
        const newTodos = [...todos]
        newTodos[todoIndex] = {
            ...newTodos[todoIndex],
            completed: !newTodos[todoIndex].completed
        }
        setTodos(newTodos)
    }

    return (
        <div className="App-container">
            <h1 className="App-heading">Todos</h1>
            <div className="App">
                <TodoInput addTodo={createNewTodo} />
                {/* we pass our createNewTodo function to the TodosInput component as the addTodo prop */}
                <TodosList todos={todos} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} />
                {/* we pass our todos state to the TodosList component as the todos prop */}
            </div>
        </div>
    )
}

export default App
