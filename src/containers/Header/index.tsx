import { StyledHeader } from "../../styled/containers"

import { IMenuProps } from "../../types/containers.types"

import Logo from "../../components/Logo"
import Menu from "../../components/MenuIcon"

const Header: React.FC<IMenuProps> = (props) => (
  <StyledHeader>
    <Logo />
    <Menu {...props} />
  </StyledHeader>
)

export default Header
