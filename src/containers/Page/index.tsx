import { useIntl } from "react-intl"
import { useDispatch, useSelector } from "react-redux"
import { ConnectedRouter } from "connected-react-router"
import { Switch, Route } from "react-router-dom"
import { history } from "../../store"
import { IPage } from "../../types/containers.types"
import { State } from "../../types/store.types"

import Home from "../../pages/Home.page"

import Header from "../Header"
import Menu from "../Menu"
import Social from "../Social"

import Background from "../../components/Background"
import Cursor from "../../components/Cursor"
import Helmet from "../../components/Helmet"

const PageProvider: React.FC<IPage> = (props) => {
  const dispatch = useDispatch()
  const location = useSelector((state: State) => state.router.location)
  const intl = useIntl()

  return (
    <ConnectedRouter history={history}>
      <Helmet lang={props.lang} />
      <Header status={props.menuStatus} setStatus={props.setMenuStatus} />
      <Social items={props.social} status={props.menuStatus} />

      <Switch>
        <Route exact path="/">
          <Home dispatch={dispatch} location={location} intl={intl} />
        </Route>
      </Switch>

      <Menu status={props.menuStatus} />
      <Cursor
        x={props.cursor.x}
        y={props.cursor.y}
        status={props.cursor.status}
      />
      <Background />
    </ConnectedRouter>
  )
}

export default PageProvider
