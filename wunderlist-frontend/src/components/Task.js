import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Icon, Skeleton, Button, Checkbox } from 'antd';

import { selectEditTask, cancelEditTask } from '../actions';
import { axiosWithAuth } from '../utilities/axiosWithAuth';

const Task = props => {
  const { task } = props
  const tasks = useSelector(state => state.todoReducer.tasks)
  console.log(`task, task and tasks`, task, tasks)

  const dispatch = useDispatch();
  // when clicked on expands to Modal? with more information
  // try containing the Modal in this component

  const toggleCompleted = e => {
    // dispatch({ type: `SET_TASK_COMPLETE`, payload: task.id })
    e.preventDefault();
    e.stopPropagation();

    let newTaskList = tasks.map(entry => entry.id === task.id ? { ...entry, completed: !entry.completed } : entry)
    console.log(`toggleCompleted in Task.js`, task, newTaskList)
    // API cal to update

    axiosWithAuth()
      .put(`/tasks/${task.id}`, task)
      .then(res => {
        console.log(`aWA in toggleCompleted`, res.data)
        dispatch({ type: `SET_TASK_COMPLETE`, payload: newTaskList })
      }
        // dispatch({ type: `SUBMIT_EDIT_SUCCESS`, payload: { isEditing: false, newTaskList } })
      )
      .catch(err =>
        dispatch({ type: `SUBMIT_EDIT_FAILURE`, payload: err })
      )
  }

  const editTask = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: `START_EDIT`, payload: { isEditing: true, task } })
    console.log(`task.id in editTask func in Task`, task.id)
    console.log(`task in editTask func in Task`, task)

  }

  const clickDelete = (e) => {
    e.preventDefault();
    console.log(`clickDelete activated on id`, task.id)
    deleteTask(task, tasks)
  }

  const deleteTask = (task, tasks) => {
    dispatch({ type: `DELETE_TASK_START` })
    let newTaskList = tasks.filter(entry => entry.id !== task.id)
    axiosWithAuth()
      .delete(`/tasks/${task.id}`)
      .then(res => {
        dispatch({ type: `DELETE_TASK_SUCCESS`, payload: newTaskList })
        console.log(`aWA delete response`, res)
      })
      .catch(err => dispatch({ type: `DELETE_TASK_FAILURE`, payload: err }))
  }

  return (
    <>

      <List.Item
        actions={[<Button type='link' onClick={editTask}>Edit</Button>, <Icon type="close" onClick={clickDelete} />]}>
        <List.Item.Meta
          title={task.item}
        />
        <Checkbox onChange={toggleCompleted}>Completed</Checkbox>
      </List.Item>
    </>


  )
}


export default Task;