import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { HeaderView, PageStatus } from '../../presentation/assessment/Views'
import { QuestionFlow } from '../../presentation/assessment/QuestionFlow'
import Service from '../../../services/assessment/'
import { storeAnswer, removeAnswer } from '../../../actions/assessment/assessmentActions'
import Results  from './Results'

class Assessment extends PureComponent {

    constructor(props) {
        super()
        this.addAnswerId = this.addAnswerId.bind(this)
        this.removeAnswerId = this.removeAnswerId.bind(this)
    }

    state = {
        answers: undefined,
        questions: undefined
    }

    componentWillMount() {
        Service.getQuestions().then(
            questions => {
                this.setState({ questions })
            }
        ) 
    }

    addAnswerId(event) {
        const { dispatchAnswer } = this.props
        const { value } = event.target.attributes['data-id']
        dispatchAnswer(parseInt(value))
    }

    removeAnswerId(event) {
        const { dispatchRemoveAnswer } = this.props
        dispatchRemoveAnswer()
    }

    render() {    
        const { answers } = this.props
        const { questions } = this.state
        const question = questions ? questions[answers.length] : undefined
        const isComplete = questions ? answers.length === questions.length : false

        return (
            <Fragment>
                <HeaderView title={"welcome " + this.props.username} />
                <QuestionFlow 
                    isComplete={isComplete}
                    question={question} 
                    addAnswerId={this.addAnswerId} 
                    removeAnswerId={this.removeAnswerId}
                    page={answers.length}
                />
            {isComplete && (<Results answers={answers} questions={questions} />)}
            {questions && <PageStatus page={answers.length} pages={questions.length} />}
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    answers: state.assessment
})

const mapDispatchToProps = dispatch => ( 
    { 
        dispatchAnswer: answer => dispatch(storeAnswer(answer)),
        dispatchRemoveAnswer: () => dispatch(removeAnswer())
    }
)


export default connect(mapStateToProps, mapDispatchToProps)(Assessment)