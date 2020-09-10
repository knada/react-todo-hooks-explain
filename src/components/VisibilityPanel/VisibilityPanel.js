import React from 'react'
import './VisibilityPanel.css'

const VisibilityPanel = ({ setVisibilityFilter }) => {
    return (
        <div className="visibility-panel">
            <button className="visibility-tab" onClick={() => setVisibilityFilter('show_todo')}>
                To do
            </button>
            <button className="visibility-tab" onClick={() => setVisibilityFilter('show_all')}>
                All
            </button>
            <button className="visibility-tab" onClick={() => setVisibilityFilter('show_done')}>
                Done
            </button>
        </div>
    )
}

export default VisibilityPanel
