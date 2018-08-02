import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { HeaderView, BiQuestionView, MultiQuestionView, FooterView } from '../../presentation/assessment/Views'
import Service from '../../../services/assessment/'
import { storeAnswer, removeAnswer } from '../../../actions/assessment/assessmentActions'

class Assessment extends PureComponent {

    constructor(props) {
        super()
        this.questions = null
        this.answer = this.answer.bind(this)
        this.previousQuestion = this.previousQuestion.bind(this)
    }

    state = {
        question: null,
        answers: []
    }

    componentWillMount() {
        Service.getQuestions().then(
            questions => {
                this.questions = questions
                this.nextQuestion()
            }
        ) 
    }

    answer() {
        const { dispatchAnswer } = this.props.asssessment
        dispatchAnswer(answer)
    }

    removeAnswer() {
        const { dispatchRemoveAnswer } = this.props.asssessment
        dispatchRemoveAnswer(answer)
    }

    accumilateScore(sign) {

    }

    render() {    
        const { question } = this.state

        return (
            <Fragment>
                <HeaderView title={"welcome " + this.props.username} />
                {
                    (question && typeof question.type === "string") && ((question.type === "bi") ? 
                    <BiQuestionView 
                        heading={question.heading} 
                        question={question.question} 
                        onClick={this.answer}
                    /> : 
                    <MultiQuestionView 
                        heading={question.heading} 
                        question={question.question} 
                        options={question.options} 
                        onClick={this.answer}
                    />)
                }
                <FooterView onClick={this.removeAnswer} page={this.state.answers.length} />
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({...state})
const mapDispatchToProps = dispatch => ( 
    { 
        dispatchAnswer: answer => dispatch(storeAnswer(answer)),
        dispatchRemoveAnswer: answer => dispatch(removeAnswer(answer))
    }
)


export default connect(mapStateToProps, mapDispatchToProps)(Assessment)