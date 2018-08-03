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

        return questions.reduce(
            (cumm, current) => 
                [ ...cumm, ...current.options], []
        ).filter(filterAnswered)
    }

    render() {
        const { answers, questions, isComplete } = this.props       
        const answeredObject = isComplete ? this.filterResults(questions, answers) : []

        if (!this.props.isComplete) {
            return <div></div>
        }

        return(
            <div>
                {                    
                    isComplete && (
                        <ResultView answered={answeredObject} />
                    ) 
                }
            </div>
        )
    }
}

export default Results