import { NEXT_QUESTION, REMOVE_ANSWER } from '../../reducers/assessment/assessmentReducer'

export const storeAnswer = (answer) => ({
    type: NEXT_QUESTION,
    answer
})

export const removeAnswer = (answer) => ({
    type: REMOVE_ANSWER
})