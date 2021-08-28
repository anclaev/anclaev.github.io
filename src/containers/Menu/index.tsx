import { StyledMenu as Styled } from "../../styled/containers"

import { IMenu } from "../../types/containers.types"

const Menu: React.FC<IMenu> = ({ status }) => (
  <Styled status={status}>Menu</Styled>
)

export default Menu
