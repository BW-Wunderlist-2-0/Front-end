import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Spin, Layout, PageHeader, Row, Col } from 'antd';


import { browserHistory } from './'
import Login from './components/Login';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import Navigation from './components/Navigation';
import WrappedOnboardingForm from './components/UserOnboarding';



function App() {
  const login = useSelector(state => state.loginReducer)
  const { Footer, Content } = Layout;

  const { isAuthenticating, errorMessage } = login


  return (
    <Router history={browserHistory}>

      <Layout style={{ minHeight: '100vh', margin: 'auto' }}>
        <PageHeader style={{ background: '#f5f5f5', margin: '0' }}
          title='WunderList 2.0'
          subTitle={<Navigation />}
        >

        </PageHeader>
        <Content >
          <Row justify='center' align='middle' >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Col>
                {isAuthenticating && <Spin size='large' tip='Logging In...' />}
                {errorMessage && <span>{errorMessage}</span>}
              </Col>
            </div>
          </Row>

          <div style={{
            margin: 'auto', maxWidth: '75%'
          }}>
            <Switch>
              < Route path='/signup' component={WrappedOnboardingForm} />

              <PrivateRoute path='/home' component={Home} />
              <Route path='/home' component={Home} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </div>

        </Content>
        <Footer style={{ textAlign: 'center' }}>Wunderlist 2019</Footer>
      </Layout >

    </Router >
  );
}

export default App;
