import React, { useState } from 'react';
import { Form, Input, Icon, Button } from 'antd';

import history from '../history';
import { submitRegistration } from '../utilities/submitRegistration'


const UserOnboarding = props => {
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
    submitRegistration(formInput)
    console.log('Received values of form: ', formInput);
    history.push('/')
  };

  console.log(`UserOnboarding props`, props);



  return (
    <>
      <h3>User Onboarding</h3>
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

export const WrappedOnboardingForm = Form.create({ name: 'register' })(UserOnboarding)

export default WrappedOnboardingForm;