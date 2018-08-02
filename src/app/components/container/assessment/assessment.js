import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { HeaderView, BiQuestionView, MultiQuestionView, FooterView } from '../../presentation/assessment/Views'
import Service from '../../../services/assessment/'
import { storeAnswer, removeAnswer } from '../../../actions/assessment/assessmentActions'

class Assessment extends PureComponent {

    constructor(props) {
        super()
        this.addAnswer = this.addAnswer.bind(this)
        this.removeAnswer= this.removeAnswer.bind(this)
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

    addAnswer(event) {
        const { dispatchAnswer } = this.props
        const { id } = event.target
        dispatchAnswer(id)
    }

    removeAnswer(event) {
        const { dispatchRemoveAnswer } = this.props
        const { id } = event.target
        dispatchRemoveAnswer(id)
    }

    render() {    
        const { answers } = this.props
        const { questions } = this.state
        const question = questions ? questions[answers.length] : undefined

        return (
            <Fragment>
                <HeaderView title={"welcome " + this.props.username} />
                {
                    question && 
                    (<MultiQuestionView 
                        heading={question.heading} 
                        question={question.question} 
                        options={question.options} 
                        onClick={this.addAnswer}
                    />)
                }
                <FooterView onClick={this.removeAnswer} page={answers.length} />
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
        dispatchRemoveAnswer: answer => dispatch(removeAnswer(answer))
    }
)


export default connect(mapStateToProps, mapDispatchToProps)(Assessment)