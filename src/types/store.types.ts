export type State = {
  app: AppState
}

export interface Action {
  type: string
}

export type AppState = {
  lang: Lang
}

export interface AppAction extends Action {
  lang?: Lang
}

export type Lang = 'ru' | 'en'
