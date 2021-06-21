import { combineReducers } from 'redux'

import AppReducer from './app.reducer'

const RootReducer = combineReducers({
  app: AppReducer,
})

export default RootReducer
