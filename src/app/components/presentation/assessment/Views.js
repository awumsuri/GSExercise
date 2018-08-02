import React from 'react'

export const HeaderView = (props) => (
    <div>
        <span>{props.title}</span>
    </div>
)

export const BiQuestionView = (props) => (
    <div>
        <div><span>{props.heading}</span></div>
        <div><span><p>{props.question}</p></span></div>
        <div>
            <button name="yes" onClick={this.props.onClick}> Yes </button>
            <button name="no" onClick={this.props.onClick}> No </button>
        </div>
    </div>
)

export const MultiQuestionView = (props) => (
    <div>
        <div><span>{props.heading}</span></div>
        <div><span><p>{props.question}</p></span></div>
        <ul>
            {props.questions.map(question => (<li>{question}</li>))}
        </ul>
    </div>   
)

