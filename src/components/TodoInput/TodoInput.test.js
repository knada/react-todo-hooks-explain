import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import App from '../../App'

const setup = () => {
    const view = render(<App />)
    const todoInput = view.getByRole('textbox')
    return {
        todoInput,
        ...view
    }
}

test('it should allow any text to be inputed', () => {
    const { todoInput } = setup()
    fireEvent.change(todoInput, { target: { value: 'Something123 !@#$%' } })
    expect(todoInput.value).toBe('Something123 !@#$%')
})

test('it should add a new todo with text as input value when "Enter" is pressed and reset the input value', () => {
    const { todoInput, getByText } = setup()
    fireEvent.change(todoInput, { target: { value: 'Something to do' } })
    fireEvent.keyDown(todoInput, { key: 'Enter', code: 'Enter' })
    const todoText = getByText(/Something to do/i)
    expect(todoText).toBeInTheDocument()
    expect(todoInput.value).toBe('')
})

// test('it should not add a new todo when "Enter" is pressed if the input field is empty', () => {
//     const { todoInput } = setup()

// })
