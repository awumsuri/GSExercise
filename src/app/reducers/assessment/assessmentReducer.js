export const NEXT_QUESTION = "NEXT_QUESTION"
export const REMOVE_ANSWER = "REMOVE_ANSWER"

export const assessmentReducer = (state=[], action) => {
    switch(action.type) {
        case NEXT_QUESTION:
            return [
                ...state,
                action.answer
            ]
        case REMOVE_ANSWER:
            if (state.length) {
                return state.slice(0, state.length -2)
            }
            return state
        default:
            return state
    }
}
