import { AppState, AppAction } from '../../types/store.types'

const initialState: AppState = {
  lang: 'ru',
}

const appReducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    default:
      return state
  }
}

export default appReducer
