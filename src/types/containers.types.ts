import { ISocialItem } from "./components.types"

export interface ISocial extends IMenu {
  items: ISocialItem[]
  id?: string
}

export interface IMenu {
  status: boolean
}

export interface IMenuProps extends IMenu {
  setStatus: (status: boolean) => void
}
