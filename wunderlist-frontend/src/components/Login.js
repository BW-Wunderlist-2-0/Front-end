import React, { useState } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';

import { axiosWithAuth } from '../utilities/axiosWithAuth';
import { browserHistory } from '../'
import { handleFormChange } from '../utilities/handleFormChange';


const Login = props => {
  console.log(`props in Login.js`, props)
  const [formInput, setFormInput] = useState({
    username: '',
    password: ''
  })

  const dispatch = useDispatch();


  const login = credentials => {
    dispatch({ type: `LOGIN_REQUEST` })
    console.log(`action login called`)
    axiosWithAuth()
      .post('/auth/login', credentials)
      .then(res => {
        console.log(`res aWA in login`, res)
        // localStorage.authToken = res.data.token
        dispatch({ type: `LOGIN_SUCCESS`, user: jwtDecode(res.data.token) })
        localStorage.setItem('token', res.data.token)
        browserHistory.push('/home')
      })
      .catch(err => {
        console.log(err)
        dispatch({ type: `LOGIN_FAILURE`, errorMessage: err.toString() })
      })
  }


  const handleSubmit = e => {
    e.preventDefault();
    login(formInput)
    console.log('Logging in with received values of form: ', formInput);
  };

  return (
    <>
      <h2>Login</h2>
      <Form layout="vertical" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center' }}>
        <Form.Item >
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username" name='username' value={formInput.username} onChange={(e) => handleFormChange(e, formInput, setFormInput)}
          />

        </Form.Item>
        <Form.Item >

          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
            name='password'
            value={formInput.password}
            onChange={(e) => handleFormChange(e, formInput, setFormInput)}
          />

        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}




export default Login;
