import React from 'react'
import { Button } from 'react-bootstrap'

export const HeaderView = (props) => (
    <div className="status login-status">
        <span>{props.title}</span>
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
    </div>   
)

export const ButtonView = (props) => (
   <div className="answer-buttons">
       { 
           props.options.map(
               (option, index) => 
               <AnswerButton 
                   value={option.buttonValue} 
                   onClick={props.onClick}
                   key={index}
                   id={option.id}
               />
            )
       }
   </div>

)

export const PageStatus = (props) => (
    <div className="status page-status">
        <span>{props.page + 1} / {props.pages + 1} </span>
    </div>
)

export const FooterView = (props) => (
    <div>
        {
            (props.page > 0) && 
            (<Button name="back" 
                onClick={props.onClick}
              >
                Back
            </Button>)
        }
    </div>
)

export const ResultView = (props) => (
    <div>
        <ul>
            <ul>
                <li>
                    <span>#</span>
                </li>
                <li>
                    <span>Question</span>
                </li>
                <li>
                  <span>Answered</span>
                </li>
                    <li>
                        <span>Points</span>
                </li>
            </ul>

            {
                props.answered.map(
                    (answer, index) => (
                        <li key={index} style={{display: "grid"}}>
                            <div>
                                <span>{index + 1}</span>
                            </div>
                            <div>
                                <span>{props.questions[index].question}</span>
                            </div>
                            <div>
                                <span>{answer.value}</span>
                            </div>
                            <div>
                                <span>{answer.buttonValue}</span>
                            </div>
                        </li>

                    )
                )
            }
            <div>
                <span>Total Score
                    <span>{props.total}</span>
                </span>
            </div>
        </ul>
    </div>
)

/* Base Elements */
const QuestionView = (props) => (
    <div>
        <div>
            <span className="heading"><p>{props.heading}</p></span>
        </div>
        <div>
            <span>
                <p>{props.question}</p>
            </span>
        </div>
    </div>
)

const AnswerButton = (props) => (
    <Button data-id={props.id} 
        type="button" 
        className="answer-button" 
        onClick={event => props.onClick(event)}
    >
        {props.value}
   </Button>
)
