import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { HeaderView, BiQuestionView, MultiQuestionView } from '../../presentation/assessment/Views'
import Service from '../../../services/assessment/'

class Assessment extends PureComponent {

    constructor(props) {
        super()
        this.questions = null
        this.currentIndex = 0;
        this.nextQuestion = this.nextQuestion.bind(this)
    }

    state = {
        question: null
    }

    componentWillMount() {
        Service.getQuestions().then(
            questions => {
                this.questions = questions
                this.nextQuestion()
            }
        ) 
    }

    nextQuestion() {
        const question = this.questions[this.currentIndex]
        this.setState({question})
        this.currentIndex++
    }

    previousQuestion() {

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
                        onClick={this.nextQuestion}
                    /> : 
                    <MultiQuestionView 
                        heading={question.heading} 
                        question={question.question} 
                        options={question.options} 
                        onClick={this.nextQuestion}
                    />)
                }
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({...state})
const mapDispatchToProps = dispatch => ( { dispatch } ) 

export default connect(mapStateToProps, mapDispatchToProps)(Assessment)