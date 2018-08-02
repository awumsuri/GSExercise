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
        <button onClick={props.onClick}
            title="submit"
        />   
    </div>
)