import {loginFinished, loginFailed} from '../actions/action';

const initialState = {
    isLoggedIn: false,
    loginFailed: false,
    signupFailed: false,
    email: '',
    userName: '',
    password: '',
    touched: {
        email: false,
        password: false
    }
}

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_FAILED' : {
            return Object.assign({}, state, {
                loginFailed: action.payload
            })
        }
        case 'LOGIN_FINISHED' : {
            return Object.assign({}, state, {
                isLoggedIn: action.payload
            })
        }
    }
}

export const login = (data) => (dispatch) => {
    console.log(data);
    dispatch(loginFailed());
}