import React, { useState, useEffect } from 'react';
import { Form, Input, DatePicker, Button } from 'antd'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

import { axiosWithAuth } from '../utilities/axiosWithAuth';
import { handleFormChange } from '../utilities/handleFormChange'

const AddTask = props => {
  const dispatch = useDispatch();
  const userID = useSelector(state => state.loginReducer.userID)


  // const initialState = {
  //   user_id: userID,
  //   completed: false
  //   // recurring: false,
  //   // recurringFrequency: 'Once'
  // }
  const [formInput, setFormInput] = useState({})

  useEffect(() => {
    setFormInput({
      ...formInput,
      user_id: userID,
      completed: false
    })
  }, [])

  const toggleDisplay = (e, message) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch({ type: `${message}` })
  }

  console.log(`formInput`, formInput)

  const addTask = task => {
    dispatch({ type: `ADD_TASK_START` })
    console.log(`sending this task in addTask`, task)
    axiosWithAuth()
      .post('/todos', task)
      .then(res => {
        console.log(`aWA in addTask action - task`, task, `res`, res)
        dispatch({ type: `ADD_TASK_SUCCESS`, payload: res.data })
      })
      .catch(err => dispatch({ type: `ADD_TASK_FAILURE`, payload: err }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Received values of AddTask Form: ', formInput);
    addTask(formInput);
    toggleDisplay(e, `TOGGLE_ADD_ITEM`)
    setFormInput({})
  };

  const handleDateChange = e => {
    console.log(`handleDateChange e`, e, `e formatted with moment`, moment(e).format('MMMM Do YYYY, h:mm:ss a'))
    const formattedDate = moment(e).format('MM-DD-YYYY, h:mm:ss a');
    setFormInput(
      {
        ...formInput,
        setDate: formattedDate,
        user_id: userID
      }
    )
  }





  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Item label='Task Title'>
          <Input
            type='text'
            name='title'
            value={formInput.title}
            onChange={e => handleFormChange(e, formInput, setFormInput)}
          />
        </Form.Item>
        <Form.Item label='Task'>
          <Input
            type='text'
            name='task'
            value={formInput.task}
            onChange={e => handleFormChange(e, formInput, setFormInput)}
          />
        </Form.Item>
        <Form.Item label='Due Date'>
          <DatePicker name='dateCreated' showTime format='YYYY-MM-DD HH:mm:ss' onChange={handleDateChange} placeholder={moment(Date.now()).format('MM-DD-YYYY, h:mm a')} />
        </Form.Item>
        {/* 
        <Form.Item>
          <Radio.Group value={formInput.recurringFrequency} onChange={handleRadioChange}>
            <Radio value='Once'>Once</Radio>
            <Radio value='Daily'>Daily</Radio>
            <Radio value='Weekly'>Weekly</Radio>
            <Radio value='Monthly'>Monthly</Radio>
          </Radio.Group >
        </Form.Item> */}

        <Button type="primary" htmlType="submit">Submit</Button>
      </Form>

    </>
  )
}


export default AddTask;