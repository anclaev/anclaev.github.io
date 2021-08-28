import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { routerMiddleware } from "connected-react-router"

import thunk from "redux-thunk"

import { createBrowserHistory } from "history"

import rootReducer from "./reducers/root.reducer"

export const history = createBrowserHistory()

const store = createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
)

export default store
