import jwtDecode from 'jwt-decode';

import { browserHistory } from '../'
import { axiosWithAuth } from '../utilities/axiosWithAuth';


/*named consts for typo-proofing*/

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_LIST_SUCCESS = "FETCH_LIST_SUCCESS";
export const FAILED_TO_FETCH = "FAILED_TO_FETCH";

// Task Editing
export const START_EDIT = 'START_EDIT';
export const SUBMIT_EDIT = 'SUBMIT_EDIT'
export const CANCEL_EDIT = 'CANCEL_EDIT';

/*actions*/

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_REQUEST })
  console.log(`action login called`)
  axiosWithAuth()
    .post('/login', credentials)
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