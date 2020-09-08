import React from 'react';


const Buttons = props => {
        return(
            <div>
                <button onClick={() => props.setActivityState('cardio')}>Cardio</button>
                <button onClick={() => props.setActivityState('study')}>Study</button>
                <button onClick={() => props.setActivityState('spiritual')}>Spiritual</button>
            </div>
        )
    }

export default Buttons;