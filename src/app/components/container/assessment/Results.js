import React, { PureComponent } from 'react'
import { ResultView } from '../../presentation/assessment/Views'

class Results extends PureComponent {

    filterResults(allAnswers, answers) {
        return allAnswers.filter(
            (question) => {
                for(const answer of answers) {
                    if (answer === question.id) {
                        return true
                    }
                }
            } 
        )
    }

    addQuestionNumberToAnswered(questions,answeredObject) {
        return answeredObject.map(
            (answer, index) => (
                {
                    ...answer,
                    index: index + 1,
                    question: questions[index].heading
                }
            )
        )
    }

    getAllAnswers(questions) {
        return questions.reduce((cumm, current) => [ ...cumm, ...current.options], [])
    }

    getTotalPossibleScore(allAnswers) {
        return allAnswers.reduce((cumm, cur) => cumm + (cur.isBestAnswer ? cur.value : 0), 0)
    }

    getTotalScore(answered) {
        return  answered.reduce((cumm, cur) => cumm + cur.value, 0)
    }

    render() {
        const { answers, questions} = this.props  
        const allAnswers =  this.getAllAnswers(questions)   
        const answeredObject =  this.addQuestionNumberToAnswered(questions, this.filterResults(allAnswers, answers))
        //answeredObject = this.addQuestionNumberToAnswered(questions, answeredObject)

        return(
            <div>
                <ResultView 
                    answered={answeredObject} 
                    result={this.getTotalScore(answeredObject)} 
                    bestPossibleScore={this.getTotalPossibleScore(allAnswers)}
                /> 
            </div>
        )
    }
}

export default Results