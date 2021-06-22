import { useState } from 'react'

import { StyledMenuIcon, StyledMenuWrapper } from '../../styled/components'

const MenuIcon: React.FC = () => {
  const [status, setStatus] = useState(false)

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
