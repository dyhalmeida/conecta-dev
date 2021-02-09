import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import theme from './theme';
import Home from './pages/home';
import Signin from './pages/signin';
import './mock';

const Page404 = () => (<h1>404 Not Found</h1>)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={Signin} />
          <Route path="*" component={Page404} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
