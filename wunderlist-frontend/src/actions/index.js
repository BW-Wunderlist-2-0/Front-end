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
export const SUBMIT_EDIT = 'SUBMIT_EDIT'
export const CANCEL_EDIT = 'CANCEL_EDIT';

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
      browserHistory.push('/home')
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: LOGIN_FAILURE, errorMessage: err.toString() })
    })
}

const logout = task => {
  delete localStorage.authToken
  return { type: LOGOUT, payload: { isEditing: false, task } }
}

// GET tasks
export const retrieveTasks = () => dispatch => {
  dispatch({ type: GET_TASKS_START })
  axiosWithAuth()
    .get('/tasks')
    .then(res => {
      dispatch({ type: GET_TASKS_SUCCESS, payload: res.data })
      console.log(`aWA in retrieveTasks res.data`, res.data)
    })
    .catch(err => dispatch({ type: GET_TASKS_FAILURE, payload: err }))
}

// ADD TASK

export const addTask = task => dispatch => {
  dispatch({ type: ADD_TASK_START })
  axiosWithAuth()
    .post('/tasks', task)
    .then(res => {
      console.log(`aWA in addTask action - task`, task, `res`, res)
      dispatch({ type: ADD_TASK_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: ADD_TASK_FAILURE, payload: err }))
}




// Edit Task Actions
export const selectEditTask = task => dispatch => {
  dispatch({ type: START_EDIT, payload: { isEditing: true, task } })
  console.log(`action selectEditTask task`, task);

}
export const cancelEditTask = task => dispatch => {
  dispatch({ type: CANCEL_EDIT, payload: { isEditing: false } })
  console.log(`action cancelEditTask task`, task);
}

export const submitEditTask = task =>
  dispatch => {
    dispatch({ type: SUBMIT_EDIT, payload: { isEditing: false } })
    // API cal to update
    console.log(`action submitEditTask task`, task)
  }
