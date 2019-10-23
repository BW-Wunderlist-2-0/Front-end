import React, { useState, useEffect } from 'react';
import { Form, Input, Icon, DatePicker, Radio, Button } from 'antd'
import moment from 'moment';
import { connect } from 'react-redux'

import { handleFormChange } from '../utilities/handleFormChange'
import { cancelEditTask, submitEditTask } from '../actions'




const EditTask = props => {
  const [formInput, setFormInput] = useState({})

  useEffect(() => {
    console.log(`useEffect props`, props)
    setFormInput(props.task)
    console.log(`uE formInput`, formInput)
  }, [props.task])


  const handleSubmit = e => {
    e.preventDefault();
    console.log('Received values of EditTask Form: ', formInput);
    props.submitEditTask(formInput)
  };

  const handleDateChange = e => {
    console.log(`handleDateChange e`, e, `e formatted with moment`, moment(e).format('MMMM Do YYYY, h:mm:ss a'))
    const formattedDate = moment(e).format('MM-DD-YYYY, h:mm:ss a');
    setFormInput(
      {
        ...formInput,
        dateCreated: formattedDate
      }
    )
  }

  const handleRadioChange = e => {
    setFormInput({
      ...formInput,
      recurringFrequency: e.target.value
    })
  }


  console.log(`editTask formInput`, formInput)

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Item label='Task Name'>
          <Input
            type='text'
            name='item'
            value={props.task.item}
            onChange={e => handleFormChange(e, formInput, setFormInput)}
          />
        </Form.Item>
        <Form.Item label='Due Date'>
          <DatePicker name='dateCreated' placeholder={props.task.dateDue} showTime format='YYYY-MM-DD HH:mm:ss' onChange={handleDateChange} />
        </Form.Item>

        <Form.Item>
          <Radio.Group value={props.task.recurringFrequency} onChange={handleRadioChange}>
            <Radio value='once'>Once</Radio>
            <Radio value='daily'>Daily</Radio>
            <Radio value='weekly'>Weekly</Radio>
            <Radio value='monthly'>Monthly</Radio>
          </Radio.Group >
        </Form.Item>

        <Button type="primary" htmlType="submit">Submit</Button>
      </Form>

    </>
  )
}

const mapStateToProps = state => {
  console.log(`EditTask mSTP state`, state)
  return {
    edit: state.editReducer,
    task: state.editReducer.task
  }
}

export default connect(mapStateToProps, { cancelEditTask, submitEditTask })(EditTask);