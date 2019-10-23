import * as actionType from '../actions';

const initialTodoState = {
  isLoading: false,
  error: "",
  tasks: [],
  editing: {
    isEditing: false,
    task: {
      completed: false,
      item: '',
      dateCreated: null,
      dateDue: null,
      recurring: false,
      recurringFrequency: ''
    }
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
    case actionType.START_EDIT:
      return {
        ...state,
        editing: {
          ...state.editing,
          isEditing: true,
          task: action.payload.task
        }
      }
    case actionType.CANCEL_EDIT:
      return {
        ...state,
        editing: {
          ...state.editing,
          isEditing: action.payload.isEditing,
          tasks: initialTodoState.tasks
        }
      }

    default:
      return state;
  }
}

// export const editReducer = (state = initialState, action = {}) => {
//   switch (action.type) {

//     default:
//       return state;
//   }
// }

export default todoReducer;