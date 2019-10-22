import React, { useState } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux';

import { login } from '../actions';


const Login = props => {
  const [formInput, setFormInput] = useState({
    username: '',
    password: ''
  })
  // console.log(`props.form`, getFieldDecorator, getFieldsError, getFieldError, isFieldTouched)
  const handleChange = e => {
    // console.log(e)
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    })
  }


  const handleSubmit = e => {
    e.preventDefault();
    props.login(formInput)
    // login({
    //   username: values.username,
    //   password: values.password
    // })

    console.log('Received values of form: ', formInput);

  };

  // colors subject to change as styling improves.
  return (
    <>
      <h1> Login Component</h1>
      <Form layout="inline" onSubmit={handleSubmit}>
        <Form.Item >
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username" name='username' value={formInput.username} onChange={handleChange}
          />

        </Form.Item>
        <Form.Item >

          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
            name='password'
            value={formInput.password}
            onChange={handleChange}
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

const mapStateToProps = state => {
  return {
    loginReducer: state.loginReducer
  }
}




export default connect(mapStateToProps, { login })(Login);

// export default Login;