import * as actionType from '../actions';

const initialState = {
  showCompleted: false,
  searchTerm: '',
  filterByTime: '',
  showMenu: false,
  showAddTask: false
}

// const createFilteredArray = (item, arr) => {
//   const lc = item.toLowerCase();
//   const filteredArr = arr.filter(entry => entry.title.toLowerCase().includes(lc))
//   return filteredArr
// }

const uiReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionType.SEARCH:
      return {
        ...state,
        displayedTasks: state.tasks.filter(entry => entry.title.toLowerCase().includes(action.payload.toLowerCase())),
        searchTerm: action.payload

      }
    case actionType.SET_TIMELINE_FILTER:
      return {
        ...state,
        filterByTime: action.filter
      }
    case actionType.TOGGLE_COMPLETION_FILTER:
      return {
        ...state,
        showCompleted: !state.showCompleted
      }
    default:
      return state;
  }
}

export default uiReducer;