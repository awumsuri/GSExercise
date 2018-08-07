import React from 'react'
import { Button, Glyphicon } from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

export const HeaderView = (props) => (
    <div className="status login-status">
        <span>{props.title}</span>
    </div>
)

export const MultiQuestionView = (props) => (
    <div>        
        <QuestionView 
            heading={props.question.heading} 
            question={props.question.question}
            page={props.page}
            pages={props.pages}
        />

        {props.question.hasMultiChoiceList && (
            <ol type={props.question.orderType}>
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
   <div className="answer-buttons-container">
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
        <span>Step {props.page + 1} of {props.pages + 1} </span>
    </div>
)

export const FooterView = (props) => (
    <div>
        {
            (props.page > 0) && 
            (<Button name="back" 
                onClick={props.onClick}
              >
                <Glyphicon glyph="glyphicon glyphicon-triangle-left"/>
            </Button>)
        }
    </div>
)

export const ResultView = (props) => (
    <div className="container">
        <BootstrapTable data={props.answered} striped hover>
            <TableHeaderColumn width="30" isKey dataField='index'>#</TableHeaderColumn>
            <TableHeaderColumn width="350" dataField='question'>Question</TableHeaderColumn>
            <TableHeaderColumn dataField='answer'>Answer</TableHeaderColumn>
            <TableHeaderColumn width="50" dataField='value'>Points</TableHeaderColumn>
        </BootstrapTable>
        <div>
            <span>Score: {props.result}/{props.bestPossibleScore}</span>
        </div>
    </div>
)

/* Base Elements */
const QuestionView = (props) => (
    <div className="question-heading">
        <PageStatus page={props.page} pages={props.pages} />
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
