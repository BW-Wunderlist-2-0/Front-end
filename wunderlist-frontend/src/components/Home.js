import React, { useState, useEffect } from 'react';
import { Drawer, Button, Icon, List, Modal } from 'antd';

import { connect } from 'react-redux';

import AddTask from './AddTask';
import Task from './Task';
import EditTask from './EditTask';
import { selectEditTask, cancelEditTask } from '../actions'
//Import ToDo component to map over component list
// import TodoItem from './TodoItem';
// Import SearchTasks component
// import EditTask component
// import AddTask component



const Home = props => {
  const [showMenu, setShowMenu] = useState(false)
  const [addItemModal, setAddItemModal] = useState(false)
  // const [editItemModal, setEditItemModal] = useState(false)

  console.log(`Home component props from mapStateToProps`, props)

  const toggleDrawer = () => {
    setShowMenu(!showMenu)
  }

  const toggleDisplay = (e, display, displaySetter) => {
    e.preventDefault();
    displaySetter(!display)
  }

  return (
    <div>
      <h1>Home Component</h1>

      <Button onClick={toggleDrawer}>Show Menu</Button>
      <Button onClick={e => toggleDisplay(e, addItemModal, setAddItemModal)}>Add Task</Button>
      {showMenu
        &&
        <Drawer
          title='Options'
          placement='left'
          closable={true}
          onClose={toggleDrawer}
          visible={showMenu}
        />}
      <Modal
        title='Add Task'
        visible={addItemModal}
        footer={false}
        onCancel={e => toggleDisplay(e, addItemModal, setAddItemModal)}
        addItemModal={addItemModal}
        setAddItemModal={setAddItemModal}
      >
        <AddTask />
      </Modal>

      <Modal
        title='Edit Task'
        visible={props.edit.isEditing}
        footer={false}
        onCancel={cancelEditTask}
      >
        <EditTask />
      </Modal>
      <div>
        <List
          itemLayout='horizontal'
        >

          {props.tasks.map(item =>
            <Task key={item.id} task={item} />
          )}
        </List>




      </div>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(`Home.js mSTP state`, state, `tasks`, state.todoReducer.tasks)
  return {
    dataFetching: state.todoReducer.dataFetching,
    tasks: state.todoReducer.tasks,
    edit: state.editReducer

  }
}

export default connect(mapStateToProps, {})(Home);