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

export const PageStatus = (props) => (
    <div>
        <span>{props.page + 1} / {props.pages + 1} </span>
    </div>
)

export const FooterView = (props) => (
    <div>
        {
            (props.page > 0) && 
            (<button name="back" 
                onClick={props.onClick}
              >
                Back
            </button>)
        }
    </div>
)

export const ResultView = (props) => (
    <div>
        <ul>
            <ul>
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
