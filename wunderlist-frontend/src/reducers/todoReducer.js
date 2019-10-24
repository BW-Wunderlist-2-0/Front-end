import * as actionType from '../actions';

const initialTodoState = {
  isLoading: false,
  error: "",
  tasks: [],
  editing: {
    isEditing: false,
    editSubmitErr: null,
    task: {
      completed: false,
      item: '',
      dateCreated: null,
      dateDue: null,
      recurring: false,
      recurringFrequency: ''
    }
  },
  deleting: {
    isDeleting: false,
    deleteErr: null,
    task: {}
  }

};


export const todoReducer = (state = initialTodoState, action = {}) => {
  switch (action.type) {
    case actionType.GET_TASKS_START:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case actionType.GET_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
        isLoading: false,
        error: "",
      };
    case actionType.GET_TASKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case actionType.SUBMIT_EDIT_START:
      return {
        ...state,
        editing: {
          ...state.editing,
          isEditing: true,
        }
      }
    case actionType.SUBMIT_EDIT_SUCCESS:
      return {
        ...state,
        editing: {
          ...state.editing,
          isEditing: false,
        },
        tasks: action.payload.newTaskList
      }
    case actionType.SUBMIT_EDIT_FAILURE:
      return {
        ...state,
        editing: {
          ...state.editing,
          isEditing: false,
        }
      }
    case actionType.DELETE_TASK_START:
      return {
        ...state,
        deleting: {
          ...state.deleting,
          isDeleting: true,
        }
      }
    case actionType.DELETE_TASK_SUCCESS:
      return {
        ...state,
        tasks: action.payload.newTaskList,
        deleting: {
          ...state.deleting,
          isDeleting: false,
        }
      }
    case actionType.DELETE_TASK_FAILURE:
      return {
        ...state,
        deleting: {
          ...state.deleting,
          isDeleting: false,
          deleteErr: action.payload
        }
      }
    case actionType.SET_TASK_COMPLETED:
      return {
        ...state,
        tasks: action.payload
      }

    default:
      return state;
  }
}



export default todoReducer;