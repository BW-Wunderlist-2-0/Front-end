import * as actionType from '../actions';

const initialTodoState = {
  isLoading: false,
  error: "",
  tasks: [
    // {
    //   userid: 1,
    //   id: 1,
    //   item: "Water Plants",
    //   dateCreated: 1571759424652,
    //   completed: false,
    //   recurring: false,
    //   recurringFrequency: 'monthly'
    // },
    // {
    //   userid: 1,
    //   id: 2,
    //   item: "Laundry",
    //   dateCreated: 1571759441517,
    //   recurring: false,
    //   recurringFrequency: 'weekly'
    // }
  ]
};


const todoReducer = (state = initialTodoState, action = {}) => {
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

    default:
      return state;
  }
}

export default todoReducer;