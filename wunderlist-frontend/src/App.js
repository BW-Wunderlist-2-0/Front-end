import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Spin } from 'antd';


import Login from './components/Login';
import history from './history';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import Navigation from './components/Navigation';
import WrappedOnboardingForm from './components/UserOnboarding';


function App(props) {
  return (
    <Router history={history}>
      <div className="App">
        <h1>Wunderlist 2.0</h1>
        <Navigation />
        {props.isAuthenticating && <Spin tip='Logging In...' />}
        <Switch>
          <Route path='/signup' component={WrappedOnboardingForm} />
          {/* PrivateRoute temporarily disabled, home component renderred in route */}
          <Route path='/home' component={Home} />
          {/* <PrivateRoute path='/home' component={Home} /> */}
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  console.log(`props in mSTP in App.js`, state)
  return {
    isAuthenticating: state.isAuthenticating
  }
}




export default connect(mapStateToProps, {})(App);
