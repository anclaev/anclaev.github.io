import { APP_SELECT_LANG } from './types.action'
import { Lang, AppAction } from '../../types/store.types'

export function selectLang(lang: Lang): AppAction {
  return {
    type: APP_SELECT_LANG,
    lang: lang,
  }
}
