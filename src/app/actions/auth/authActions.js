import { LOGIN } from '../../reducers/auth/authReducer'
import { authenticateUser } from '../../services/auth/auth'

export const authenticate = async (dispatch, username, password) => {
    const user = await authenticateUser(username, password)
    const isAuthorized = typeof user === 'object'
    
    dispatch( {
        type: LOGIN,
        authenticated: isAuthorized,
        user: user || {}
    })
}