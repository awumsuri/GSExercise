export const NEXT_QUESTION = "NEXT_QUESTION"
export const REMOVE_ANSWER = "REMOVE_ANSWER"

export const assessmentReducer = (state=[], action) => {
    switch(action.type) {
        case NEXT_QUESTION:
            return [
                ...state.answers,
                action.answer
            ]
        case REMOVE_ANSWER:
            return state.filter(
                answer => answer.id !== action.answer.id
            )
        default:
            return state
    }
}
