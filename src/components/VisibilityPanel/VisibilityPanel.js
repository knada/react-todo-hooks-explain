import React from 'react'
import './VisibilityPanel.css'

const VisibilityPanel = ({ visibilityFilter, setVisibilityFilter }) => {
    return (
        <div className="visibility-panel">
            <button
                className={`visibility-tab ${visibilityFilter === 'show_todo' ? 'active' : null}`}
                onClick={() => setVisibilityFilter('show_todo')}
            >
                To do
            </button>
            <button
                className={`visibility-tab ${visibilityFilter === 'show_done' ? 'active' : null}`}
                onClick={() => setVisibilityFilter('show_done')}
            >
                Done
            </button>
            <button
                className={`visibility-tab ${visibilityFilter === 'show_all' ? 'active' : null}`}
                onClick={() => setVisibilityFilter('show_all')}
            >
                All
            </button>
        </div>
    )
}

export default VisibilityPanel
