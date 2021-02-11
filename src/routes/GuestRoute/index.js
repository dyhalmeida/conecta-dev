import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from '../../pages/home';

export default function GuestRoute({component: Component, ...rest}) {
    const user = useSelector(({account}) => account.user);
    const isAuthenticated = !!user;
    return(
        <Route {...rest} component={(isAuthenticated ? Home : Component)} />
    );
}