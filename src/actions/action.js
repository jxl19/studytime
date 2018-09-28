// export const LOGIN_FINISHED = 'LOGIN_FINISHED';
// export const loginFinished = (cred) => ({
//     type: LOGIN_FINISHED,
//     payload: cred
// });

// export const LOGIN_FAILED = 'LOGIN_FAILED';
// export const loginFailed = () => ({
//     type: LOGIN_FAILED,
//     payload: true
// });

// export const simpleAction = () => dispatch => {
//     dispatch({
//         type: 'SIMPLE_ACTION',
//         payload: 'result_of_simple_action'
//     })
// }

export const loginFinished = (cred) => dispatch => {
    dispatch({
        type: 'LOGIN_FINISHED',
        payload: cred
    })
}

export const loginFailed = () => dispatch => {
    dispatch({
        type: 'LOGIN_FAILED',
        payload: true
    })
}