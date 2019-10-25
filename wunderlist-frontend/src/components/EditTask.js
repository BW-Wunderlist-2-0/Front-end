import React, { useState, useEffect } from 'react';
import { Form, Input, Icon, DatePicker, Radio, Button } from 'antd'
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';


import { axiosWithAuth } from '../utilities/axiosWithAuth';
import { handleFormChange } from '../utilities/handleFormChange'






const EditTask = () => {
  const task = useSelector(state => state.todoReducer.editing.task);
  const tasks = useSelector(state => state.todoReducer.tasks)
  const dispatch = useDispatch();


  const [formInput, setFormInput] = useState(task)

  useEffect(() => {

    setFormInput(task)

  }, [])


  const handleSubmit = e => {
    e.preventDefault();
    submitEditTask(formInput, tasks)
  };

  const handleDateChange = e => {
    const formattedDate = moment(e).format('MM-DD-YYYY, h:mm:ss a');
    setFormInput(
      {
        ...formInput,
        dateDue: formattedDate
      }
    )
  }




  const submitEditTask = (task, tasks) => {
    dispatch({ type: `SUBMIT_EDIT_START` })
    // API cal to update
    let newTaskList = tasks.filter(entry => entry.id !== task.id)

    axiosWithAuth()
      .put(`/todos/${task.id}`, formInput)
      .then(res => {
        // console.log(res)
        dispatch({ type: `SUBMIT_EDIT_SUCCESS`, payload: [...newTaskList, res.data] })
      }
      )
      .catch(err =>
        dispatch({ type: `SUBMIT_EDIT_FAILURE`, payload: err })
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


        <Button type="primary" htmlType="submit">Submit</Button>
      </Form>

    </>
  )
}



export default EditTask