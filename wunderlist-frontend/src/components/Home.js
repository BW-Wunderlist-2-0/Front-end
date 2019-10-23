import React, { useState, useEffect } from 'react';
import { Drawer, Button, Icon, List, Modal } from 'antd';

import { connect } from 'react-redux';

import AddTask from './AddTask';
import Task from './Task';
import EditTask from './EditTask';
import { toggleDisplay } from '../utilities/toggleDisplay';
import { cancelEditTask, retrieveTasks } from '../actions';
//Import ToDo component to map over component list
// import TodoItem from './TodoItem';
// Import SearchTasks component
// import EditTask component
// import AddTask component


const Home = props => {
  const [showMenu, setShowMenu] = useState(false)
  const [addItemModal, setAddItemModal] = useState(false)
  // const [displayedTasks, setDisplayedTasks] = useState([])

  useEffect(() => {
    props.retrieveTasks()
    console.log(`uE tasks`, props.tasks)
    // setDisplayedTasks(props.tasks)
    // console.log(`displayedTasks in Home`, displayedTasks);
  }, []);
  console.log(`Home component props from mapStateToProps`, props)
  //uE to execute getData func

  //getData, executes aWa
  props.tasks.forEach(entry => console.log(`props.tasks.fE entry`, entry))

  const toggleDrawer = () => {
    setShowMenu(!showMenu)
  }

  // const toggleDisplay = (e, display, displaySetter) => {
  //   e.preventDefault();
  //   displaySetter(!display)
  // }

  const hideEdit = e => {
    e.preventDefault();
    props.cancelEditTask();
  }

  return (
    <div>
      <h1>Home Component</h1>
      <Button onClick={toggleDrawer}>Show Menu</Button>
      <Button onClick={e => toggleDisplay(e, addItemModal, setAddItemModal)}>Add Task</Button>
      {/* {props.activeUser.username && <h4>Hello, {props.activeUser.username}</h4>} */}
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
        onCancel={hideEdit}
      >
        <EditTask />
      </Modal>
      <div>
        <List itemLayout='horizontal'>
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
    dataFetching: state.todoReducer,
    tasks: state.todoReducer.tasks,
    edit: state.todoReducer.editing,
    activeUser: state.loginReducer.currentUser

  }
}

export default connect(mapStateToProps, { cancelEditTask, retrieveTasks })(Home);