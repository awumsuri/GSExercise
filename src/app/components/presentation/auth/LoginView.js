import React from 'react'
import { InputView } from '../InputView'
import { Button } from 'react-bootstrap'

export const LoginView = (props) => (
    <div className="login-container">  
        <div>      
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
        </div>      
        <div className="login-btn">
            <Button
                bsSize="small"
                bsStyle="outline-info" 
                type="button" 
                onClick={props.onClick}
            >Submit
            </Button>
        </div>   
        {(props.authenticated === false) && (
            <div>
                <span className="error">Incorrect Creditentials</span>
            </div>
         )}
    </div>
)