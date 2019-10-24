import jwtDecode from 'jwt-decode';

import { browserHistory } from '../'
import { axiosWithAuth } from '../utilities/axiosWithAuth';


/*named consts for typo-proofing*/

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

// retrieving task
export const GET_TASKS_START = "GET_TASKS_START";
export const GET_TASKS_SUCCESS = "GET_TASKS_SUCCESS";
export const GET_TASKS_FAILURE = "GET_TASKS_FAILURE";

// adding task -- refactor this to be more like editing task
export const ADD_TASK_START = "ADD_TASK_START";
export const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS";
export const ADD_TASK_FAILURE = "ADD_TASK_FAILURE";

// deleting task
export const DELETE_TASK_START = "DELETE_TASK_START";
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS";
export const DELETE_TASK_FAILURE = "DELETE_TASK_FAILURE";

// Task Editing
export const START_EDIT = 'START_EDIT';
export const CANCEL_EDIT = 'CANCEL_EDIT';

export const SUBMIT_EDIT_START = 'SUBMIT_EDIT_START';
export const SUBMIT_EDIT_SUCCESS = 'SUBMIT_EDIT_SUCCESS'
export const SUBMIT_EDIT_FAILURE = 'SUBMIT_EDIT_FAILURE';

export const SEARCH = 'SEARCH';
export const SET_TIMELINE_FILTER = 'SET_TIMELINE_FILTER';
export const FILTER_BY_COMPLETION = 'FILTER_BY_COMPLETION';

export const SET_TASK_COMPLETED = `SET_TASK_COMPLETED`;


/*actions*/

/// USER AUTh Tasks
export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_REQUEST })
  console.log(`action login called`)
  axiosWithAuth()
    .post('/auth/login', credentials)
    .then(res => {
      console.log(`res aWA in login`, res)
      // localStorage.authToken = res.data.token
      dispatch({ type: LOGIN_SUCCESS, user: jwtDecode(res.data.token) })
      localStorage.setItem('token', res.data.token)
      browserHistory.push('/home')
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: LOGIN_FAILURE, errorMessage: err.toString() })
    })
}

// const logout = task => {
//   delete localStorage.authToken
//   return { type: LOGOUT, payload: { isEditing: false, task } }
// } 





// Edit Task Actions
export const selectEditTask = task => dispatch => {
  dispatch({ type: START_EDIT, payload: { isEditing: true, task } })
  console.log(`action selectEditTask task`, task);
}



export const deleteTask = (task, tasks) => dispatch => {
  dispatch({ type: DELETE_TASK_START })
  let newTaskList = tasks.filter(entry => entry.id !== task.id)
  axiosWithAuth()
    .delete(`/tasks/${task.id}`)
    .then(res => {
      dispatch({ type: DELETE_TASK_SUCCESS, payload: newTaskList })
      console.log(`aWA delete response`, res)
    })
    .catch(err => dispatch({ type: DELETE_TASK_FAILURE, payload: err }))
}

export const search = value => dispatch => {
  dispatch({ type: SEARCH, value })
}



export const filterByCompletion = () => dispatch => {
  dispatch({ type: FILTER_BY_COMPLETION })
}