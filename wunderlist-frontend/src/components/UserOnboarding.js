import React, { useState } from 'react';
import { Form, Input, Icon, Button } from 'antd';

import { axiosWithAuth } from '../utilities/axiosWithAuth';
import { submitRegistration } from '../utilities/submitRegistration'


const initialFormState = {
  confirmDirty: false
}

const initialUserInfo = {
  username: '',
  password: ''
}

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}


const UserOnboarding = props => {
  const [formState, setFormState] = useState(initialFormState)
  const [userInfo, setUserInfo] = useState(initialUserInfo)

  console.log(`UserOnboarding props`, props);

  const { form, getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;

  const usernameError = isFieldTouched('username') && getFieldError('username');
  const passwordError = isFieldTouched('password') && getFieldError('password');



  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        setUserInfo({
          username: values.username,
          password: values.password
        });
      }
      submitRegistration(userInfo);
    });
  };

  const handleConfirmBlur = e => {
    const { value } = e.target;
    setFormState({ confirmDirty: formState.confirmDirty || !!value });
  };


  const compareToFirstPassword = (rule, value, callback) => {
    if (value && value !== form.getFieldValue('password')) {
      callback('Passwords do not match!')
    } else {
      callback && callback();
    }
  };

  const validateToNextPassword = (rule, value, callback) => {
    if (value && formState.confirmDirty) {
      form.validateFields(['confirmPassword'], { force: true });
    }
    callback && callback();
  }

  return (
    <>
      <h3>User Onboarding</h3>
      <Form onSubmit={handleSubmit}>
        {/* username Input */}
        <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please provide a username.' }]
          })
            (<Input
              prefix={<Icon type='user' />}
              placeholder='Username'
            />)}
        </Form.Item>
        {/* password Input */}
        <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please provide a password.' }]
          })
            (<Input.Password
              prefix={<Icon type='lock' />}
              placeholder='Password' />
            )}
          {/* confirm password Input */}
        </Form.Item>
        <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
          {getFieldDecorator('confirmPassword', {
            rules: [{ required: true, message: 'Please confirm password.' }, {
              validator: compareToFirstPassword()
            }]
          })
            (<Input.Password onBlur={handleConfirmBlur}
              pefix={<Icon type='lock' />}
              placeholder='Confirm Password'
            />)}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            Submit
          </Button>
        </Form.Item>

      </Form>
    </>
  )
}

export const WrappedOnboardingForm = Form.create({ name: 'register' })(UserOnboarding)

export default WrappedOnboardingForm;