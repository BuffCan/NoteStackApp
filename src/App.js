/* start Json server with this: json-server --watch data/db.json --port 8000 */


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Login from './pages/Login'
import { createTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

import Profile from './pages/Profile';
import Sidebar from './components/Sidebar';
import Appbar from './components/Appbar';

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
            <Route path="/register">
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/profile">
              <Appbar />
              <Sidebar />
              <Profile />
            </Route>
            <Route path="/notes">
              <Appbar />
              <Sidebar />
              <Notes />
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
