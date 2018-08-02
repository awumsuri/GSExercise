import { LOGIN } from '../../reducers/auth/authReducer'
import { authenticateUser } from '../../services/auth/auth'

export const authenticate = async (dispatch, username, password) => {
    const isAuthorized = await authenticateUser(username, password)
    
    dispatch( {
        type: LOGIN,
        authenticated: isAuthorized
    })
}