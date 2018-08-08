import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import expect from 'expect'
import Results from './Results'
import questions from '../../../model/assessment/questions'
import allAnswers from '../../../model/assessment/mocks/allAnswers'
import answeredObject from '../../../model/assessment/mocks/answeredObject'

const answers = [ 1,4,42,40,43,189 ]
Enzyme.configure({ adapter: new Adapter() });
const setup = () => {
    const props = {
        questions: questions,
        answers: answers 
    }
    const wrapper = mount(<Results { ...props } />)

    return {
        props,
        wrapper      
    }
}

const { wrapper } = setup()
const result = new Results(wrapper.props())

describe("Results Unit Test", () => {
    it("props passed through correctly", () => {
        expect(wrapper.props().questions).toEqual(questions)
        expect(wrapper.props().answers).toEqual(answers)
    })

    it("should calculate getAllAnswers correctly", () => {
        expect(result.getAllAnswers(questions)).toEqual(allAnswers)
    })

    it("should calculate answeredObject correctly", () => {
        const calculatedAnswerObject =  result.addQuestionNumberToAnswered(questions, 
            result.mapQuestionsToAnswered(allAnswers, answers))

        expect(calculatedAnswerObject).toEqual(answeredObject)
    })
})