import { ICursor, ISocialItem } from "./components.types"
import { Lang } from "./store.types"
import { Dispatch } from "react"

export interface ISocial extends IMenu {
  items: ISocialItem[]
  id?: string
}

export interface IMenu {
  status: boolean
  dispatch?: Dispatch<any>
}

export interface IMenuProps extends IMenu {
  setStatus: (status: boolean) => void
}

export interface IPage {
  lang: Lang
  social: ISocialItem[]
  cursor: ICursor
  menuStatus: boolean
  setMenuStatus: (status: boolean) => void
}
