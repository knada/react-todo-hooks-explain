import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import TodoInput from './TodoInput'

const setup = () => {
    const utils = render(<TodoInput />)
    const todoInput = utils.getByRole('textbox')
    return {
        todoInput,
        ...utils
    }
}

test('it should allow any text to be inputed', () => {
    const { todoInput } = setup()
    fireEvent.change(todoInput, { target: { value: 'Something123 !@#$%' } })
    expect(todoInput.value).toBe('Something123 !@#$%')
})

// test('it should add a new todo when "Enter" is pressed and reset the input value', () => {
//     const { todoInput } = setup()

// })

// test('it should not add a new todo when "Enter" is pressed if the input field is empty', () => {
//     const { todoInput } = setup()

// })
