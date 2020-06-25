const initialState = {
    authError: false,
    isAdminLoggedIn: false,
    isUserLoggedIn: false,
    isLoggedOut: true
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'LOGIN_BACK_CLICKED':
            return {
                ...state,
                authError: false
            }

        case 'NO_AUTHERROR':
            return {
                ...state,
                authError: false
            }

        case 'LOGOUT':
            return {
                ...state,
                isLoggedOut: true
            }

        case 'ADMIN':
            return {
                ...state,
                isAdminLoggedIn: true
            }

        case 'LOGIN_ERROR':

            return {
                ...state,
                authError: true
            }

        case 'LOGIN_SUCCESS':
            console.log('Login Success')
            return {
                ...state,
                authError: null,
                isLoggedOut: false

            }

        case 'SIGNUP_SUCCESS':
            console.log('Signup Success')
            return {
                ...state,
                authError: null,
                isLoggedOut: false

            }


        default:
            return state
    }

}

export default authReducer;