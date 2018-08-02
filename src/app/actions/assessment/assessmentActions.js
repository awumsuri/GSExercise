import Services from '../../services/assessment/assessment'
import { GET_QUESTIONS } from '../../reducers/assessment/assessmentReducer'

export const getQuestions = async (dispatch) => {
    const questions = await getQuestions()

    dispatch({
        type: GET_QUESTIONS,
        questions
    })

} 