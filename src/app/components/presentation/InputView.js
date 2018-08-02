import React from 'react'

export const InputView = (props) => (
    <div>
        <label>
            {props.name}
        </label>
        <input
            type={props.type}
            name={props.name}
            onChange={props.onchange}
        />
    </div>
)