import React from 'react'

export const HeaderView = (props) => (
    <div>
        <span>Welcome to GS Exam</span>
         <div>
            {props.username}
        </div>
    </div>
)

