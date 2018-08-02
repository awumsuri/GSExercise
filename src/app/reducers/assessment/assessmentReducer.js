export const GET_QUESTIONS = "GET_QUESTIONS"

export const assessmentReducer = (state={}, action) => {
    switch(action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                questions: action.questions
            }
        default:
            return state
    }
}
