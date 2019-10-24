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



function App(props) {
  const login = useSelector(state => state.loginReducer)
  const { Footer, Content } = Layout;

  const { isAuthenticating, currentUser, errorMessage } = login


  return (
    <Router history={browserHistory}>

      <Layout style={{ minHeight: '100vh' }}>
        <PageHeader style={{ background: '#f5f5f5', margin: '0' }}
          title='WunderList 2.0'
          subTitle={<Navigation />}
        >

        </PageHeader>
        <Content >
          <Row type='flex' justify='center'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {isAuthenticating && <Spin tip='Logging In...' />}
              {errorMessage && <span>{errorMessage}</span>}
            </div>
            <Col xs={20} sm={18} md={16} lg={14} xl={12} style={{ margin: '1rem', padding: '1rem', }}>
              <Switch>
                <Route path='/signup' component={WrappedOnboardingForm} />

                <PrivateRoute path='/home' component={Home} />
                <Route path='/home' component={Home} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Wunderlist 2019</Footer>
      </Layout>

    </Router >
  );
}

export default App;
