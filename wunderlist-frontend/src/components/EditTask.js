import React, { useState, useEffect } from 'react';
import { Form, Input, Icon, DatePicker, Radio, Button } from 'antd'
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';


import { axiosWithAuth } from '../utilities/axiosWithAuth';
import { handleFormChange } from '../utilities/handleFormChange'






const EditTask = props => {
  const [formInput, setFormInput] = useState({})

  const edit = useSelector(state => state.todoReducer.editing);
  const task = useSelector(state => state.todoReducer.editing.task);
  const tasks = useSelector(state => state.todoReducer.tasks)
  const dispatch = useDispatch();


  console.log(`EditTask`, task, tasks)
  useEffect(() => {
    console.log(`useEffect props`, props)
    setFormInput(task)
    console.log(`uE formInput`, formInput)
  }, [])


  const handleSubmit = e => {
    e.preventDefault();
    console.log('Received values of EditTask Form: ', formInput);
    //signal edit submit action here
    submitEditTask(formInput, tasks)
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
  };

  const cancelEditTask = task => {
    dispatch({ type: `CANCEL_EDIT`, payload: { isEditing: false } })
    console.log(`action cancelEditTask task`, task);
  };

  const submitEditTask = (task, tasks) => {
    dispatch({ type: `SUBMIT_EDIT_START` })
    // API cal to update
    let newTaskList = tasks.filter(entry => entry.id !== task.id)
    axiosWithAuth()
      .put(`/tasks/${task.id}`, task)
      .then(
        dispatch({ type: `SUBMIT_EDIT_SUCCESS`, payload: { isEditing: false, newTaskList } })
      )
      .catch(err =>
        dispatch({ type: `SUBMIT_EDIT_FAILURE`, payload: err })
      )
  }


  console.log(`editTask formInput`, formInput)

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Item label='Task Name'>
          <Input
            type='text'
            name='item'
            value={task.item}
            onChange={e => handleFormChange(e, formInput, setFormInput)}
          />
        </Form.Item>
        <Form.Item label='Due Date'>
          <DatePicker name='dateCreated' placeholder={moment(Date.now()).format('MM-DD-YYYY, h:mm a')} showTime format='YYYY-MM-DD HH:mm:ss' onChange={handleDateChange} />
        </Form.Item>

        <Form.Item>
          <Radio.Group value={task.recurringFrequency} onChange={handleRadioChange}>
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



export default EditTask