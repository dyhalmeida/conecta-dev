import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../../pages/home';
import authService from '../../services/authService';

export default function GuestRoute({component: Component, ...rest}) {
    const isAuthenticated = authService.isAuthenticated();
    return(
        <Route {...rest} component={(isAuthenticated ? Home : Component)} />
    );
}