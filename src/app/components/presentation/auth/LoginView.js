import React from 'react'
import { Input } from '../Input'

export const LoginView = (props) => (
    <div>
        <form>
            <Input
                type="text"
                name="username"
                onchange={e => props.onChange}
            />    
            <Input
                type="password"
                name="password"
                onchange={e => props.onChange}
            /> 
        </form>
        <button onClick={props.onClick}
            title="submit"
        />   
    </div>
)