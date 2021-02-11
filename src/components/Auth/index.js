import React from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../actions/accountActions';
import authService from '../../services/authService';

function Auth({ children }) {

    const dispatch = useDispatch();

    const initAuth = React.useCallback(async () => {

        if (authService.isAuthenticated()) {
            dispatch(setUserData())
        }

    }, [dispatch]);

    React.useEffect(() => {
        initAuth();
    }, [initAuth]);

    return children;
}

export default Auth;