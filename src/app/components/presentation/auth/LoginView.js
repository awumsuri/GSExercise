import React from 'react'
import { InputView } from '../InputView'
import { Button } from 'react-bootstrap'

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
        <Button
            bsSize="small"
            bsStyle="primary " 
            type="button" 
            onClick={props.onClick}
        >Submit
        </Button>   
        {(props.authenticated === false) && (
            <div>
                <span className="error">Incorrect Creditentials</span>
            </div>
         )}
    </div>
)