import * as actionType from '../actions';

const initialState = {
  displayedTasks: [],
  searchTerm: '',
  filterByTime: ''
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
        ui: {
          ...state.ui,
          displayedTasks: state.tasks.filter(entry => entry.title.toLowerCase().includes(action.payload.toLowerCase())),
          searchTerm: action.payload
        }
      }
    case actionType.SET_TIMELINE_FILTER:
      return {
        ...state,
        filterByTime: action.filter
      }
    default:
      return state;
  }
}

export default uiReducer;