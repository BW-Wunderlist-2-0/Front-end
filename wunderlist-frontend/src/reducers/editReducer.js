import * as actionType from '../actions';

const initialState = {
  isEditing: true,
  task: {
    completed: false,
    item: 'Editing Item',
    dateCreated: 1529644667834,
    recurring: false,
    recurringFrequency: 'Once'
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
        ...state,
        isEditing: action.payload.isEditing,

      }
    default:
      return state;
  }
}

export default editReducer;