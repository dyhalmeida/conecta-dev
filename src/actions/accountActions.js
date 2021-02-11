import authService from '../services/authService';

export const LOGIN_SUCCESS = '@ACCOUNT/LOGIN_SUCCESS';
export const SILENT_LOGIN = '@ACCOUNT/SILENT_LOGIN';

export const signIn = (email, password) => {
    return async (dispatch) => {
        const user = await authService.sigin(email, password);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {
                user,
            }
        });
    }
}

export const setUserData = () => {
    return async (dispatch) => {
        const user = await authService.siginWithToken();
        dispatch({
            type: SILENT_LOGIN,
            payload: {
                user,
            }
        });
    }
}