import authService from '../services/authService';

const signIn = (email, password) => {
    return async (dispatch) => {
        const user = await authService.sigin(email, password);
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: {
                user,
            }
        });
    }
}

export { 
    signIn,
}