import { createStore, combineReducers } from 'redux'
import {authReducer as auth} from '../reducers/auth/authReducer';
import {testReducer as test} from '../reducers/test/testReducer'

const configureStore = () => {
    const appReducers = combineReducers({auth, test})
    const store = createStore(appReducers)
    console.log(test)

    return store
}

export default { configureStore }