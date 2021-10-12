import React from 'react'
import { useOvermindAction, useOvermindState } from './overmind'


export default function Step3() {

    const state = useOvermindState();
    const action = useOvermindAction();

    if(state.currentStep!==3)
        return null;

    return (
        <div className="form-content">
            <input placeholder="Password" type="password" value={state.password} onChange={(e)=>{action.updatePassword(e.target.value)}}/>
        </div>
    )
}
