import React, { useState, useEffect } from 'react';
import { Drawer, Button, Icon, List, Modal, Switch } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

// import { connect } from 'react-redux';

import { axiosWithAuth } from '../utilities/axiosWithAuth';
import { deleteTask } from '../actions';
import { toggleDisplay } from '../utilities/toggleDisplay';
import AddTask from './AddTask';
import Task from './Task';
import EditTask from './EditTask';
import Search from './Search';
import FilterLink from './FilterLink';
import { displayGivenTimeline } from '../utilities/displayGivenTimeline';

//Import ToDo component to map over component list
// import TodoItem from './TodoItem';
// Import SearchTasks component
// import EditTask component
// import AddTask component

// dataFetching: state.todoReducer,
// tasks: state.todoReducer.tasks,
// edit: state.todoReducer.editing,
// activeUser: state.loginReducer.currentUser

const Home = props => {
  // const { cancelEditTask, retrieveTasks, deleteTask } = props
  const dispatch = useDispatch();
  const dataFetching = useSelector(state => state.todoReducer);
  const tasks = useSelector(state => state.todoReducer.tasks);
  const edit = useSelector(state => state.todoReducer.editing);
  const activeUser = useSelector(state => state.loginReducer.currentUser)
  const filterByTime = useSelector(state => state.uiReducer.filterByTime)

  const [showMenu, setShowMenu] = useState(false)
  const [addItemModal, setAddItemModal] = useState(false)
  // const [displayedTasks, setDisplayedTasks] = useState([])

  const tasksFilteredByTimeline = displayGivenTimeline(tasks, filterByTime)


  const retrieveTasks = () => {
    dispatch({ type: 'GET_TASKS_START' })
    axiosWithAuth()
      .get('/tasks')
      .then(res => {
        dispatch({ type: 'GET_TASKS_SUCCESS', payload: res.data })
        console.log(`aWA in retrieveTasks res.data`, res.data)
      })
      .catch(err => dispatch({ type: 'GET_TASKS_FAILURE', payload: err }))
  }



  useEffect(() => {
    retrieveTasks()
    console.log(`useEffect tasks`, tasks)
    // setDisplayedTasks(props.tasks)
    // console.log(`displayedTasks in Home`, displayedTasks);
  }, []);
  // console.log(`Home component props from mapStateToProps`, props)
  //uE to execute getData func

  //getData, executes aWa
  tasks.forEach(entry => console.log(`tasks.forEeach entry`, entry))

  const toggleDrawer = () => {
    setShowMenu(!showMenu)
  }

  const switchChange = checked => {
    dispatch({ type: `SET_VISIBILITY_FILTER`, })
  }

  // const toggleDisplay = (e, display, displaySetter) => {
  //   e.preventDefault();
  //   displaySetter(!display)
  // }

  const hideEdit = e => {
    e.preventDefault();
    dispatch({ type: `CANCEL_EDIT`, payload: { isEditing: false } })
  }

  return (
    <div>
      <h1>Home Component</h1>
      <Button onClick={toggleDrawer}>Show Menu</Button>
      <Button onClick={e => toggleDisplay(e, addItemModal, setAddItemModal)}>Add Task</Button>
      {/* <Search /> */}

      {/* {props.activeUser.username && <h4>Hello, {props.activeUser.username}</h4>} */}

      <Drawer
        title='View Options'
        placement='left'
        closable={true}
        onClose={toggleDrawer}
        visible={showMenu}>


        <span><Switch onChange={switchChange} /><p>Show Completed</p></span>
        <h3>Display</h3>
        <div>
          {''}
          <FilterLink filter='SHOW_DAY' currentFilter={filterByTime}> Today</FilterLink>
          <FilterLink filter='SHOW_SEVEN_DAYS' currentFilter={filterByTime}> Next 7 Days</FilterLink>
          <FilterLink filter='SHOW_THIRTY_DAYS' currentFilter={filterByTime}> Next 30 Days</FilterLink>
        </div >
      </Drawer >
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
        visible={edit.isEditing}
        footer={false}
        onCancel={hideEdit}
      >
        <EditTask />
      </Modal>
      <div>
        <List itemLayout='horizontal'>
          {tasks.map(item =>
            <Task key={item.id} task={item} deleteTask={deleteTask} tasks={tasks} />
          )}
        </List>
      </div>
    </div >
  )
}

// const mapStateToProps = state => {
//   console.log(`Home.js mSTP state`, state, `tasks`, state.todoReducer.tasks)
//   return {
//     dataFetching: state.todoReducer,
//     tasks: state.todoReducer.tasks,
//     edit: state.todoReducer.editing,
//     activeUser: state.loginReducer.currentUser

//   }
// }

export default Home;