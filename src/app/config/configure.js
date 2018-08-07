import { createStore, combineReducers } from 'redux'
import {authReducer as auth} from '../reducers/auth/authReducer';
import {assessmentReducer as assessment} from '../reducers/assessment/assessmentReducer'

const configureStore = () => {
    const appReducers = combineReducers({auth, assessment})
    const store = createStore(appReducers)

    return store
}

export default { configureStore }