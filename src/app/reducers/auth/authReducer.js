export const LOGIN = "LOGIN"

export const authReducer =  (state={}, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                authenticated: action.authenticated,
                user: action.user
            }
        default: 
            return state

    }
}