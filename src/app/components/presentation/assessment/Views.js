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
            <button data-id={props.id} name="yes" onClick={(e) => props.onClick(e)}> Yes </button>
            <button data-id={props.id} name="no" onClick={(e) => props.onClick(e)}> No </button>
        </div>
    </div>
)

export const MultiQuestionView = (props) => (
    <div>        
        <QuestionView heading={props.question.heading} question={props.question.question}/>
        {props.question.hasMultiChoiceList && (<ol type={props.question.orderType}>
               {props.question.options.map(
                    (option, index) => (
                        <li key={index} onClick={props.onClick}>
                            {option.answer}
                        </li>
                    )
                )
               }
            </ol>
          )
        }
        <div>
            { 
                props.question.options.map(
                    (option, index) => <AnswerButton 
                        value={option.buttonValue} 
                        onClick={props.onClick}
                        key={index}
                        id={option.id}
                    />
                 )
            }
        </div>
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

const AnswerButton = (props) => (
    <button data-id={props.id} 
        type="button" 
        className="someclass" 
        onClick={event => props.onClick(event)}
    >
        {props.value}
   </button>
)
