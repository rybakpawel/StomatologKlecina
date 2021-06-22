import React from 'react';

const Line = ({ center, allOver }) => {
    return (
        <div className={`line ${center ? 'line--center' : ''} ${allOver ? 'line--all-over' : ''}`}>
        </div>
    )
}

export default Line