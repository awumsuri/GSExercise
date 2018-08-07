import React from 'react'
import { MultiQuestionView, FooterView, ButtonView } from './Views'

export const QuestionFlow = (props) => (
    <div className="container">
        {
            (props.question) && 
            (<div>                
                <MultiQuestionView 
                    question={props.question}  
                    page={props.page}
                    pages={props.pages}
                /> 
                <ButtonView 
                    options={props.question.options} 
                    onClick={props.addAnswerId}
                />       
                <FooterView 
                    onClick={props.removeAnswerId} 
                    page={props.page} 
                />
            </div>)
        }
    </div>
)