import jwtDecode from 'jwt-decode';

import { browserHistory } from '../'
import { axiosWithAuth } from '../utilities/axiosWithAuth';


/*named consts for typo-proofing*/

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const GET_TASKS_START = "GET_TASKS_START";
export const GET_TASKS_SUCCESS = "GET_TASKS_SUCCESS";
export const GET_TASKS_FAILURE = "GET_TASKS_FAILURE";

// Task Editing
export const START_EDIT = 'START_EDIT';
export const SUBMIT_EDIT = 'SUBMIT_EDIT'
export const CANCEL_EDIT = 'CANCEL_EDIT';

/*actions*/

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

export const retrieveTasks = () => dispatch => {
  dispatch({ type: GET_TASKS_START })
  axiosWithAuth()
    .get('/tasks')
    .then(res => {
      dispatch({ type: GET_TASKS_SUCCESS, payload: res.data })
      console.log(`aWA in retrieveTasks res.data`, res.data, `pl`, dispatch.payload)
    })
    .catch(err => dispatch({ type: GET_TASKS_FAILURE, payload: err }))
}

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

const logout = task => {
  delete localStorage.authToken
  return { type: LOGOUT, payload: { isEditing: false, task } }
}