import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import expect from 'expect'
import Results from './Results'
import questions from '../../../model/assessment/questions'

Enzyme.configure({ adapter: new Adapter() });
const setup = () => {
    const props = {
        questions: questions,
        answers: [ 1,0,3,4,5,61 ] 
    }
    const wrapper = mount(<Results { ...props } />)

    return {
        props,
        wrapper      
    }
}

describe("Results API Test", () => {
    it("should calculate reducers correctly", () => {
        const { wrapper } = setup()
        console.log("wrapper:", wrapper)
        expect(wrapper.props().questions).toEqual(questions)
    })
})