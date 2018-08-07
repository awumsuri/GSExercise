import React from 'react'
import { Label } from 'react-bootstrap'

export const InputView = (props) => (
    <div>
        <Label style={{backgroundColor: '#444'}}>
            {props.name}
        </Label>
        <input
            type={props.type}
            name={props.name}
            onChange={props.onchange}
        />
    </div>
)