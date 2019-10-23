import * as actionType from '../actions';

const initialState = {
  isEditing: false,
  task: {
    completed: false,
    item: '',
    dateCreated: null,
    recurring: false,
    recurringFrequency: ''
  }
}

const editReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionType.START_EDIT:
      return {
        ...state,
        isEditing: true,
        task: action.payload.task
      }
    case actionType.FINISH_EDIT:
      return {
        ...initialState,
        isEditing: action.payload.isEditing,

      }
    default:
      return state;
  }
}

export default editReducer;