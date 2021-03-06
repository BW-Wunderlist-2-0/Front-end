import React, { useState } from 'react';
import { Form, Input, Icon, DatePicker, Radio, Button } from 'antd'
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { axiosWithAuth } from '../utilities/axiosWithAuth';
import { handleFormChange } from '../utilities/handleFormChange'

const initialState = {
  completed: false,
  item: '',
  dateDue: null,
  recurring: false,
  recurringFrequency: 'Once'
}


const AddTask = props => {
  const [formInput, setFormInput] = useState(initialState)
  const dispatch = useDispatch();


  const toggleDisplay = (e, message) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch({ type: `${message}` })
  }

  const addTask = task => {
    dispatch({ type: `ADD_TASK_START` })
    axiosWithAuth()
      .post('/tasks', task)
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
    setFormInput(initialState)
  };

  const handleDateChange = e => {
    console.log(`handleDateChange e`, e, `e formatted with moment`, moment(e).format('MMMM Do YYYY, h:mm:ss a'))
    const formattedDate = moment(e).format('MM-DD-YYYY, h:mm:ss a');
    setFormInput(
      {
        ...formInput,
        dateDue: formattedDate
      }
    )
  }

  const handleRadioChange = e => {
    setFormInput({
      ...formInput,
      recurringFrequency: e.target.value
    })
  }



  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Item label='Task Name'>
          <Input
            type='text'
            name='item'
            value={formInput.item}
            onChange={e => handleFormChange(e, formInput, setFormInput)}
          />
        </Form.Item>
        <Form.Item label='Due Date'>
          <DatePicker name='dateCreated' showTime format='YYYY-MM-DD HH:mm:ss' onChange={handleDateChange} placeholder={moment(Date.now()).format('MM-DD-YYYY, h:mm a')} />
        </Form.Item>

        <Form.Item>
          <Radio.Group value={formInput.recurringFrequency} onChange={handleRadioChange}>
            <Radio value='Once'>Once</Radio>
            <Radio value='Daily'>Daily</Radio>
            <Radio value='Weekly'>Weekly</Radio>
            <Radio value='Monthly'>Monthly</Radio>
          </Radio.Group >
        </Form.Item>

        <Button type="primary" htmlType="submit">Submit</Button>
      </Form>

    </>
  )
}


export default AddTask;