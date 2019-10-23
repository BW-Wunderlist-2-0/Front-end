import * as actionType from '../actions';

// this is an add reducer not yet incorporated into the project
const initialState = {
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

const addReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionType.ADD_TASK_START:
      return {
        ...state,
        isEditing: true,
        task: action.payload.task
      }
    case actionType.ADD_TASK_SUCCESS:
      return {


      }
    case actionType.ADD_TASK_FAILURE:
      return {
        ...initialState,

      }
    default:
      return state;
  }
}

export default addReducer;