/* 
start Json server with this: 
json-server --watch data/db.json --port 8000
json-server --watch data/dblogin.json --port 7000
json-server --watch data/dbregister.json --port 4000
npm start

*/


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Login from './pages/Login'
import { createTheme, Divider, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

import Profile from './pages/Profile';
import Sidebar from './components/Sidebar';
import Appbar from './components/Appbar';
import Register from './pages/Register';
import AppbarLoginRegister from './components/AppbarLoginRegister';
import { Fragment } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
          <Switch>
            <Route path="/" exact component={Fragment}>
              <Fragment>
                <AppbarLoginRegister />
                <Login />
              </Fragment>
            </Route>
            <Route path="/register">
              <AppbarLoginRegister />
              <Register />
            </Route>
            <Route path="/login">
              <AppbarLoginRegister />
              <Login />
            </Route>
            <Route path="/profile">
              <Appbar />
              <Sidebar />
              <Profile />
            </Route>
            <Route path="/notes" exact component={Fragment}>
            <Fragment>
              <Appbar />
              <Sidebar />
              <Notes />
            </Fragment>
            </Route>
            <Route path="/create">
              <Appbar />
              <Sidebar />
              <Create />
            </Route>
          </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
