import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import WrappedLogin from './components/Login';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import Navigation from './components/Navigation';
import WrappedOnboardingForm from './components/UserOnboarding';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Wunderlist 2.0</h1>
        <Navigation />
        <Switch>
          <Route path='/signup' component={WrappedOnboardingForm} />
          {/* PrivateRoute temporarily disabled */}
          {/* <PrivateRoute path='/home' component={Home} /> */}
          <Route path='/home' component={Home} />
          <Route path='/login' component={WrappedLogin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;