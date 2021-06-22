import { StyledHeader } from '../../styled/containers'

import Logo from '../../components/Logo'
import Menu from '../../components/MenuIcon'

const Header: React.FC = () => (
  <StyledHeader>
    <Logo />
    <Menu />
  </StyledHeader>
)

export default Header
