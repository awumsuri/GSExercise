import React from 'react'
import { MultiQuestionView, FooterView, ButtonView, PageStatus } from './Views'

export const QuestionFlow = (props) => (
    <div className="question-container">
        {
            (props.question) && 
            (<div>
                <PageStatus 
                    page={props.page} 
                    pages={props.pages} 
                />
                <MultiQuestionView 
                    question={props.question}  
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