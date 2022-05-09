import { FormattedMessage } from 'react-intl'
import Lang from '../../components/Lang'
import { StyledMenu as Styled } from '../../styled/containers'

import { IMenu } from '../../types/containers.types'

// import Social from "../Social"

// import data from "../../config/content.json"

const Menu: React.FC<IMenu> = ({ status, dispatch }) => (
  <Styled status={status} dispatch={dispatch}>
    <div>
      <FormattedMessage id="menu_content" />
      <Lang dispatch={dispatch ?? null} />
    </div>
  </Styled>
)

export default Menu
