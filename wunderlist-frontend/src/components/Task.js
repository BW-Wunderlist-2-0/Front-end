import React from 'react';
import { List, Icon, Skeleton, Button } from 'antd';

const Task = props => {

  // when clicked on expands to Modal? with more information
  // try containing the Modal in this component


  const editTask = e => {
    e.preventDefault();
    console.log(props.task.id)
  }


  return (
    <>

      <List.Item
        actions={[<a onClick={editTask}>edit</a>, <Icon type="close" />]}>
        <List.Item.Meta
          title={props.task.item}
        />
      </List.Item>
    </>


  )
}

export default Task;