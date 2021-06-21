import { APP_SELECT_LANG } from '../actions/types.action'
import { AppState, AppAction } from '../../types/store.types'

const initialState: AppState = {
  lang: window.navigator.language.substr(0, 2) === 'ru' ? 'ru' : 'en',
}

const appReducer = (state = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case APP_SELECT_LANG:
      return {
        ...state,
        lang: action.lang ?? 'ru',
      }
    default:
      return state
  }
}

export default appReducer
