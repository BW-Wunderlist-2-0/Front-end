import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Spin } from 'antd';


import Login from './components/Login';
import { browserHistory } from './'
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import Navigation from './components/Navigation';
import WrappedOnboardingForm from './components/UserOnboarding';


function App(props) {
  const { isAuthenticating, currentUser, errorMessage } = props.login


  return (
    <Router history={browserHistory}>
      <div className="App">
        <h1>Wunderlist 2.0</h1>
        <Navigation />
        {isAuthenticating && <Spin tip='Logging In...' />}
        {errorMessage && <span>{errorMessage}</span>}
        <Switch>
          <Route path='/signup' component={WrappedOnboardingForm} />
          {/* PrivateRoute temporarily disabled, home component renderred in route */}
          <Route path='/home' component={Home} />
          {/* <PrivateRoute path='/home' component={Home} /> */}
          <Route path='/home' component={Home} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  console.log(`props in mSTP in App.js`, state)
  return {
    login: state.loginReducer
  }
}




export default connect(mapStateToProps, {})(App);
