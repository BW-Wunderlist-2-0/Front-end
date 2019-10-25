
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

// Task Adding
export const TOGGLE_ADD_ITEM = 'TOGGLE_ADD_ITEM';
// Menu
export const TOGGLE_MENU = 'TOGGLE_MENU';

// Task Editing
export const START_EDIT = 'START_EDIT'
export const CANCEL_EDIT = 'CANCEL_EDIT'

export const SUBMIT_EDIT_START = 'SUBMIT_EDIT_START';
export const SUBMIT_EDIT_SUCCESS = 'SUBMIT_EDIT_SUCCESS'
export const SUBMIT_EDIT_FAILURE = 'SUBMIT_EDIT_FAILURE';

export const SEARCH = 'SEARCH';
export const SET_TIMELINE_FILTER = 'SET_TIMELINE_FILTER';
export const TOGGLE_COMPLETION_FILTER = 'TOGGLE_COMPLETION_FILTER';

export const SET_TASK_COMPLETED = `SET_TASK_COMPLETED`;


export const deleteTask = (task, tasks) => dispatch => {
  dispatch({ type: DELETE_TASK_START })
  let newTaskList = tasks.filter(entry => entry.id !== task.id)
  axiosWithAuth()
    .delete(`/todos/${task.id}`)
    .then(res => {
      dispatch({ type: DELETE_TASK_SUCCESS, payload: newTaskList })
      console.log(`aWA delete response`, res)
    })
    .catch(err => dispatch({ type: DELETE_TASK_FAILURE, payload: err }))
}

export const search = value => dispatch => {
  dispatch({ type: SEARCH, value })
}

