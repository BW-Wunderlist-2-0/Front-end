import React from 'react';
import { Form, Icon, Input, Button } from 'antd';

import { axiosWithAuth } from '../utilities/axiosWithAuth';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const Login = props => {
  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form
  // console.log(`props.form`, getFieldDecorator, getFieldsError, getFieldError, isFieldTouched)

  const usernameError = isFieldTouched('username') && getFieldError('username');
  const passwordError = isFieldTouched('password') && getFieldError('password');

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        axiosWithAuth()
          .post('/api/login', values)
          .then(res => {
            localStorage.setItem('token', res.data.payload)
            props.history.push('./friends')
          })
          .catch(err => console.log(err.response))
      }
    });

  };

  // colors subject to change as styling improves.
  return (
    <>
      <h1> Login Component</h1>
      <Form layout="inline" onSubmit={handleSubmit}>
        <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

const WrappedLogin = Form.create({ name: 'login' })(Login);


export default WrappedLogin;