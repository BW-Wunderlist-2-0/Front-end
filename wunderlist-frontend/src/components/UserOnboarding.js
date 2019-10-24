import React, { useState } from 'react';
import { Form, Input, Icon, Button } from 'antd';

import { submitRegistration } from '../utilities/submitRegistration'
import { handleFormChange } from '../utilities/handleFormChange';


const UserOnboarding = props => {
  const [formInput, setFormInput] = useState({
    username: '',
    password: ''
  })



  const handleSubmit = e => {
    e.preventDefault();
    submitRegistration(formInput)
    console.log('Received values of form: ', formInput);
    //migrate this to submitRegistration vv
    props.history.push('/login')
  };

  console.log(`UserOnboarding props`, props);



  return (
    <>
      <h2>Create User</h2>
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
            Sign Up
          </Button>
        </Form.Item>
      </Form>

    </>
  )
}

export const WrappedOnboardingForm = Form.create({ name: 'register' })(UserOnboarding)

export default WrappedOnboardingForm;