import React, { PureComponent } from 'react'
import { ResultView } from '../../presentation/assessment/Views'

class Results extends PureComponent {

    filterResults(questions, answers) {
        const filterAnswered = (question) => {
            for(const answer of answers) {
                if (answer === question.id) {
                    return true
                }
            }
        }

    return  questions.reduce((cumm, current) => [ ...cumm, ...current.options], [])
            .filter(filterAnswered)
    }

    getTotalScore(answered) {
        return  answered.reduce((cumm, cur) => cumm + cur.value, 0)
    }

    render() {
        const { answers, questions} = this.props       
        const answeredObject =  this.filterResults(questions, answers)

        return(
            <div>
                <ResultView 
                    answered={answeredObject} 
                    total={this.getTotalScore(answeredObject)} 
                /> 
            </div>
        )
    }
}

export default Results