import { StyledMenuIcon, StyledMenuWrapper } from "../../styled/components"

import { IMenuProps } from "../../types/containers.types"

const MenuIcon: React.FC<IMenuProps> = ({ status, setStatus }) => {
  const changeMenuStatus = () => setStatus(!status)

  return (
    <StyledMenuWrapper className="cursor" onClick={changeMenuStatus}>
      <StyledMenuIcon className="cursor" status={status}>
        <span className="cursor"></span>
        <span className="cursor"></span>
        <span className="cursor"></span>
      </StyledMenuIcon>
    </StyledMenuWrapper>
  )
}

export default MenuIcon
