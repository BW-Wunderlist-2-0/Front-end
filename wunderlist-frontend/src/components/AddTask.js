import React, { useState } from 'react';
import { Form, Input, Icon, DatePicker, TimePicker, Button } from 'antd'

import { handleFormChange } from '../utilities/handleFormChange'

// const { MonthPicker, RangePicker } = DatePicker;

const initialState = {
  completed: false,
  item: '',
  dateCreated: '',
  recurring: false,
  recurringFrequency: ''
}

const AddTask = props => {
  const [formInput, setFormInput] = useState(initialState)

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Received values of AddTask Form: ', formInput);
    setFormInput(initialState)


  };

  const handleDateChange = e => {

    console.log(`handleDateChange e`, e)
  }



  return (
    <>
      <Form >
        <Form.Item label='Task Name'>
          <Input
            type='text'
            name='task'
            value={formInput.task}
            onChange={e => handleFormChange(e, formInput, setFormInput)}
          />
        </Form.Item>
        <Form.Item label='Due Date'>
          <DatePicker showTime format='YYYY-MM-DD HH:mm:ss' onChange={handleDateChange} />
        </Form.Item>

        <Button type="primary" htmlType="submit">Submit</Button>
      </Form>

    </>
  )
}


export default AddTask;