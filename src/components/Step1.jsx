import React from 'react'
import {useOvermindState, useOvermindAction} from "./overmind/index"


export default function Step1() {

    const state = useOvermindState();
    const action = useOvermindAction();


    if(state.currentStep !== 1){
        return null;
    }

    return (
        <div className="form-content">
            <input type="email" placeholder="Enter email" value={state.email} onChange={(e)=>action.updateEmail(e.target.value)}/>
        </div>
    )
}
