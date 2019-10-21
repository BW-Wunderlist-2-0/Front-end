import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Navigation from './components/Navigation';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Wunderlist 2.0</h1>
        <Navigation />
        <Switch>
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
