import React from 'react'

export const HeaderView = (props) => (
    <div>
        <span>{props.title}</span>
    </div>
)

export const BiQuestionView = (props) => (
    <div>
        <QuestionView heading={props.heading} question={props.question}/>
        <div>
            <button name="yes" onClick={props.onClick}> Yes </button>
            <button name="no" onClick={props.onClick}> No </button>
        </div>
    </div>
)

export const MultiQuestionView = (props) => (
    <div>
        <QuestionView heading={props.heading} question={props.question}/>
        <ol type="A">
            {props.options.map(
                (option, index) => (
                <li key={index} onClick={props.onClick}>
                    {option.answer}
                </li>
               )
             )
            }
        </ol>
    </div>   
)

export const FooterView = (props) => (
    <div>
        {
            (props.page > 0) && 
            (<button name="back" onClick={props.onClick}>Back</button>)
        }
    </div>
)

/* Base Elements */
const QuestionView = (props) => (
    <div>
        <div>
            <span>{props.heading}</span>
        </div>
        <div>
            <span>
                <p>{props.question}</p>
            </span>
        </div>
    </div>
)
