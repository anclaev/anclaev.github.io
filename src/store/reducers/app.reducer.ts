import { APP_SELECT_LANG, APP_CHANGE_CURSOR } from '../actions/types.action'
import { AppState, AppAction } from '../../types/store.types'

const initialState: AppState = {
  lang: window.navigator.language.substr(0, 2) === 'ru' ? 'ru' : 'en',
  cursor: false,
}

const appReducer = (state = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case APP_SELECT_LANG:
      return {
        ...state,
        lang: action.lang ?? 'ru',
      }

    case APP_CHANGE_CURSOR:
      return {
        ...state,
        cursor: !state.cursor,
      }

    default:
      return state
  }
}

export default appReducer
