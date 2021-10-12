import React from 'react'
import { useOvermindState, useOvermindAction } from './overmind'

export default function Step2() {
    const state = useOvermindState();
    const action = useOvermindAction();

    if(state.currentStep!==2)
        return null;

    return (
        <div className="form-content">
            <input placeholder="Username" type="text" value={state.username} onChange={(e)=>action.updateUsername(e.target.value)}/>
        </div>
    )
}
