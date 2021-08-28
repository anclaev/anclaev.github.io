import { useSelector } from "react-redux"

import { Lang as ILang, State } from "../../types/store.types"
import { ILang as ILangProps } from "../../types/components.types"
import { selectLang } from "../../store/actions/app.action"

import { StyledLang } from "../../styled/components"
const Lang: React.FC<ILangProps> = ({ dispatch }) => {
  const lang: ILang = useSelector((state: State) => state.app.lang)

  const changeLang = () =>
    dispatch ? dispatch(selectLang(lang === "ru" ? "en" : "ru")) : null

  return (
    <StyledLang className="cursor" onClick={() => changeLang()}>
      <span data-lang={lang === "ru" ? true : undefined}>ru</span>
      <span data-lang={lang === "en" ? true : undefined}>en</span>
    </StyledLang>
  )
}

export default Lang
