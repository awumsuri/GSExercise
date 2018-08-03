import React, { Fragment } from 'react'
import { MultiQuestionView, FooterView } from './Views'

export const QuestionFlow = (props) => (
    <div>
        {
            (!props.isComplete && props.question) && 
            (<Fragment>
                <MultiQuestionView 
                    question={props.question}  
                    onClick={props.addAnswerId}
                />        
                <FooterView onClick={props.removeAnswerId} page={props.page} />
            </Fragment>)
        }
    </div>
)