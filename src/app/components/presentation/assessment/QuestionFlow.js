import React from 'react'
import { MultiQuestionView, FooterView } from './Views'

export const QuestionFlow = (props) => (
    <div>
        {
            props.question && 
            (<MultiQuestionView 
                question={props.question}  
                onClick={props.addAnswerId}
            />)
        }
        <FooterView onClick={props.removeAnswerId} page={props.page} />
    </div>
)