import { APP_SELECT_LANG, APP_CHANGE_CURSOR } from '../actions/types.action'
import { AppState, AppAction, Lang } from '../../types/store.types'

const initialState: AppState = {
  lang: localStorage.getItem('lang') as Lang || 'en',
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
