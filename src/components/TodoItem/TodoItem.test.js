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

test('it should have a checkbox, text and a delete button', () => {
    const { todoInput } = setup()
})
