import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import Navigation from './components/Navigation';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Wunderlist 2.0</h1>
        <Navigation />
        <Switch>

          {/* PrivateRoute temporarily disabled */}
          {/* <PrivateRoute path='/home' component={Home} /> */}
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
