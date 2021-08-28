import { connectRouter } from "connected-react-router"
import { combineReducers } from "redux"

import AppReducer from "./app.reducer"

const rootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    app: AppReducer,
  })

export default rootReducer
