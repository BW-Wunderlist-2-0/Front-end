import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Icon, Skeleton, Button } from 'antd';

import { selectEditTask, cancelEditTask } from '../actions';
import { axiosWithAuth } from '../utilities/axiosWithAuth';

const Task = props => {
  const { task } = props
  const tasks = useSelector(state => state.todoReducer.tasks)


  const dispatch = useDispatch();
  // when clicked on expands to Modal? with more information
  // try containing the Modal in this component


  const editTask = e => {
    e.preventDefault();
    console.log(`task.id in editTask func in Task`, task.id)
    console.log(`task in editTask func in Task`, task)

    selectEditTask(task);
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
        actions={[<p onClick={editTask}>edit</p>, <Icon type="close" onClick={clickDelete} />]}>
        <List.Item.Meta
          title={task.item}
        />
      </List.Item>
    </>


  )
}


export default Task;