import { APP_SELECT_LANG, APP_CHANGE_CURSOR } from './types.action'
import { Lang, AppAction } from '../../types/store.types'

export function selectLang(lang: Lang): AppAction {
  return {
    type: APP_SELECT_LANG,
    lang: lang,
  }
}

export function changeCursor(): AppAction {
  return {
    type: APP_CHANGE_CURSOR,
  }
}
