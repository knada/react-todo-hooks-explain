import React from 'react'
import './VisibilityPanel.css'

const VisibilityPanel = ({ setVisibilityFilter }) => {
    return (
        <div className="visivbility-panel">
            <button onClick={() => setVisibilityFilter('show_active')}>Task to be</button>
            <button onClick={() => setVisibilityFilter('show_all')}>All tasks</button>
            <button onClick={() => setVisibilityFilter('show_completed')}>Completed tasks</button>
        </div>
    )
}

export default VisibilityPanel
