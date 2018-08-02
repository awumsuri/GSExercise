import React from 'react'
import { InputView } from '../InputView'

export const LoginView = (props) => (
    <div>
        <form>
            <InputView
                type="text"
                name="username"
                onchange={props.onChange}
            />    
            <InputView
                type="password"
                name="password"
                onchange={props.onChange}
            /> 
        </form>
        <button type="button" onClick={props.onClick}>Submit</button>   
        {(props.authenticated === false) && (
            <div><span>Incorrect Creditentials</span></div>
         )}
    </div>
)