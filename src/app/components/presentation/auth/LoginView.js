import React from 'react'
import { Input } from '../Input'

export const LoginView = (props) => (
    <div>
        <form>
            <Input
                type="text"
                name="username"
                onchange={props.onChange}
            />    
            <Input
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