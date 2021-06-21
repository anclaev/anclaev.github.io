import { Lang } from './store.types'

export interface IHelmet {
  lang?: Lang
  title?: string
  description?: string
  keywords?: string
  og?: string
}

export interface ICursor {
  x: number
  y: number
}
