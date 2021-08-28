import { useSelector } from "react-redux"
import { useState } from "react"
import { IntlProvider } from "react-intl"

import LOCALES from "./i18n/locales"
import messages from "./i18n/messages"

import data from "./config/content.json"

import Style from "./styled/root"

import { State } from "./types/store.types"
import { ICursor } from "./types/components.types"

import Analytics from "./components/Analytics"

import PageProvider from "./containers/Page"

import { StyledWrapper } from "./styled/containers"

const App: React.FC = () => {
  const { lang } = useSelector((state: State) => state.app)
  const [menu, setMenu] = useState<boolean>(false)

  const [cursor, setCursor] = useState<ICursor>({
    x: 0,
    y: 0,
    status: false,
  })

  const cursorMoveHandler = (e: any) => {
    let isActive = false
    try {
      isActive = e.target.className.includes("cursor")
    } catch (e) {
      isActive = true
    }
    setCursor({ x: e.clientX, y: e.clientY, status: isActive })
  }

  const menuStatusHandler = (status: boolean) => setMenu(status)

  return (
    <StyledWrapper onMouseMove={cursorMoveHandler}>
      <IntlProvider
        messages={messages[lang]}
        locale={lang}
        defaultLocale={LOCALES.ENGLISH}
      >
        <Style />
        <PageProvider
          lang={lang}
          social={data["social"]}
          cursor={cursor}
          menuStatus={menu}
          setMenuStatus={menuStatusHandler}
        />
        <Analytics />
      </IntlProvider>
    </StyledWrapper>
  )
}

export default App
