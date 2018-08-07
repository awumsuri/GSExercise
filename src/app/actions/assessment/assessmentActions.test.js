import expect from 'expect'
import * as Actions from './assessmentActions'
import * as ActionType from '../../reducers/assessment/assessmentReducer'

describe("Assessment Actions Test", () => {
    it('should return action with correct type and value', () => {
        const answer = ["A"]
        const expecteAnswer = {
            type: ActionType.NEXT_QUESTION,
            answer
        }

        expect(Actions.storeAnswer(answer)).toEqual(expecteAnswer)
    })

    it("should call REMOVE action", () => {
        const expecteAnswer = {
            type: ActionType.REMOVE_ANSWER
        }

        expect(Actions.removeAnswer()).toEqual(expecteAnswer)
    })
    
    
})
