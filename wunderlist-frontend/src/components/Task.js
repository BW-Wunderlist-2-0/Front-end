import React from 'react';
import { connect } from 'react-redux';
import { List, Icon, Skeleton, Button } from 'antd';

import { selectEditTask, cancelEditTask } from '../actions'

const Task = props => {

  // when clicked on expands to Modal? with more information
  // try containing the Modal in this component


  const editTask = e => {
    e.preventDefault();
    console.log(`props.task.id in editTask func in Task`, props.task.id)
    console.log(`props.task in editTask func in Task`, props.task)
    props.selectEditTask(props.task);
  }

  const clickDelete = (e) => {
    e.preventDefault();
    console.log(`clickDelete activated on id`, props.task.id)
    props.deleteTask(props.task, props.tasks)
  }


  return (
    <>

      <List.Item
        actions={[<a onClick={editTask}>edit</a>, <Icon type="close" onClick={clickDelete} />]}>
        <List.Item.Meta
          title={props.task.item}
        />
      </List.Item>
    </>


  )
}
const mapStateToProps = state => {
  console.log(`Home.js mSTP state`, state, `tasks`, state.todoReducer.tasks)
  return {

    tasks: state.todoReducer.tasks,
    edit: state.editReducer,

  }
}

export default connect(mapStateToProps, { selectEditTask })(Task);
