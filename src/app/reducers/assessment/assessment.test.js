import expect from 'expect'
import * as Assessment from './assessmentReducer'

describe("Assessment Reducer", () => {
    const answer = 122

    it("Should add to state correctly", () => {
        const expectedAnswer = [ answer ]            

        const action = {
            type: Assessment.NEXT_QUESTION,
            answer: answer
        }

        expect(Assessment.assessmentReducer(undefined, action)).toEqual(expectedAnswer)
    })
    it("Should add to state correctly", () => {
        const expectedAnswer = []            

        const action = {
            type: Assessment.REMOVE_ANSWER,
            answer: answer
        }

        expect(Assessment.assessmentReducer([answer], action)).toEqual(expectedAnswer)
    })
})