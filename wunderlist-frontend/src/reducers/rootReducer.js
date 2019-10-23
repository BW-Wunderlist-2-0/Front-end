import { combineReducers } from 'redux'

import loginReducer from './loginReducer';
import todoReducer from './todoReducer';
// import editReducer from './editReducer';

const rootReducer = combineReducers({
  loginReducer, todoReducer
})

export default rootReducer;