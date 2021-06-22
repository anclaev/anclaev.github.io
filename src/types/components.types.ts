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
  status: boolean
}

export interface IBackground {
  opacity?: string
  isPoster?: boolean
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
}

export interface ISocialItem {
  id: 'vk' | 'insta' | 'telegram' | 'github' | string
  link: string
}
