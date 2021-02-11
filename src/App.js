import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import GuestRoute from './routes/GuestRoute';
import { Provider } from 'react-redux';
import store from './store';

import theme from './theme';
import Home from './pages/home';
import Signin from './pages/signin';
import Auth from './components/Auth';
import './mock';

const Page404 = () => (<h1>404 Not Found</h1>)

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Auth>
            <Switch>
              <Route path="/" component={Home} exact />
              <GuestRoute path="/signin" component={Signin} />
              {/* <Route path="/signin" component={Signin} /> */}
              <Route path="*" component={Page404} />
            </Switch>
          </Auth>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
