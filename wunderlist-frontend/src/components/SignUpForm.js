import React from "react";
import {
    Form,
    Input,
    Button,
  } from 'antd';

  import * as Yup from "yup";



  const SignUpForm = () => {
    return(
    <Form>
      <Input
        placeholder='Username'
      />
      <Input
        type='password'
        placeholder='Password'
      />
      <Button type='primary' htmlType="submit">
        Sign up
      </Button>
    </Form>
    )
  
  }

  export default SignUpForm;