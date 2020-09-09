import React, { useState } from 'react'
import './TodoInput.css'

const TodoInput = ({ addTodo }) => {
    //To make sure that our React state is the single source of truth in our app,
    //we keep need to make sure we keep track of form elements that have their own state, like input, textarea, select etc.
    //These are called controlled components, read more about that here: https://reactjs.org/docs/forms.html
    const [value, setValue] = useState('')
    const handleChange = event => {
        setValue(event.target.value)
    }

    const handleEnter = event => {
        //When our user presses enter after inputing their todo,
        //we create add a new todo with the current value and then reset the value.
        if (event.key === 'Enter') {
            addTodo(value)
            setValue('')
        }
    }

    return (
        <div className="todo-input-container">
            <input className="todo-input" type="text" onChange={handleChange} onKeyDown={handleEnter} value={value} />
        </div>
    )
}

export default TodoInput
