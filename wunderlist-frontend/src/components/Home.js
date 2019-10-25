import React, { useEffect } from 'react';
import { Drawer, List, Modal, Switch } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

// import { connect } from 'react-redux';

import { axiosWithAuth } from '../utilities/axiosWithAuth';
import { deleteTask } from '../actions';
// import { toggleDisplay } from '../utilities/toggleDisplay';
// import { displayGivenTimeline } from '../utilities/displayGivenTimeline';
// import { toggleShowCompleted } from '../utilities/toggleShowCompleted';

import AddTask from './AddTask';
import Task from './Task';
import EditTask from './EditTask';
import FilterLink from './FilterLink';



const Home = props => {

  const dispatch = useDispatch();
  const userID = useSelector(state => state.loginReducer.userID)
  const tasks = useSelector(state => state.todoReducer.tasks);
  const edit = useSelector(state => state.todoReducer.editing);
  const uiFilters = useSelector(state => state.uiReducer)

  const { filterByTime, showCompleted, showMenu, addItemModal, searchTerm } = uiFilters



  const toggleDisplay = (e, message) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch({ type: `${message}` })
  }



  // const applySearch = (tasks, term) => {
  //   let termLC
  //   if (searchTerm) {
  //     termLC = searchTerm.toLowerCase();
  //   } else termLC = '';
  //   return displayedTasks.filter(entry => entry.title.toLowerCase().includes(termLC));
  // }

  // const tasksFilteredByTimeline = displayGivenTimeline(tasks, filterByTime);

  // // console.log(`tasksFilteredByTimeline`, tasksFilteredByTimeline)

  // // const tasksFilteredByCompletion = toggleShowCompleted(tasksFilteredByTimeline);
  // const tasksFilteredByCompletion = toggleShowCompleted(tasks, uiFilters.showCompleted);
  // // console.log(`tasksFilteredByCompletion`, tasksFilteredByCompletion)


  // const tasksFilteredBySearch = applySearch(tasksFilteredByCompletion, searchTerm);




  useEffect(() => {
    dispatch({ type: 'GET_TASKS_START' })
    axiosWithAuth()
      .get('/todos')
      .then(res => {
        let userTasks = res.data.filter(entry => entry.user_id === userID)
        dispatch({ type: 'GET_TASKS_SUCCESS', payload: userTasks })

      })
      .catch(err => {
        dispatch({ type: 'GET_TASKS_FAILURE', payload: err })

      })
  }, []);



  const switchChange = () => {
    dispatch({ type: `TOGGLE_COMPLETION_FILTER` })
  }

  const hideEdit = e => {
    e.preventDefault();
    dispatch({ type: `CANCEL_EDIT`, payload: { isEditing: false } })
  }

  return (
    <div>
      <h2>Tasks</h2>
      <Drawer
        title='View Options'
        placement='left'
        closable={true}
        onClose={e => toggleDisplay(e, `TOGGLE_MENU`)}
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
        onCancel={e => toggleDisplay(e, `TOGGLE_ADD_ITEM`)}
        addItemModal={addItemModal}
        setAddItemModal={addItemModal}
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



export default Home;