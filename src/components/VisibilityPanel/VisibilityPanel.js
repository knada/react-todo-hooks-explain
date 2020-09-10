import React from 'react'
import './VisibilityPanel.css'

const VisibilityPanel = ({ visibilityFilter, setVisibilityFilter }) => {
    return (
        <div className="visibility-panel">
            <button
                //we check whether the current visibilityFilter is that of the tab and set the styling to active
                //we assign the visibility to the tab clicked.
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
