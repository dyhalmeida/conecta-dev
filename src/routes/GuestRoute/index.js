import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../../pages/home';
// import authService from '../../services/authService';

import { useSelector } from 'react-redux';


export default function GuestRoute({component: Component, ...rest}) {
    const user = useSelector(({user}) => user);
    const isAuthenticated = !!user.id;
    return(
        <Route {...rest} component={(isAuthenticated ? Home : Component)} />
    );
}