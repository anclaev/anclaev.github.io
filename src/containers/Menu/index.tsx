import { StyledMenu as Styled } from "../../styled/containers"

import { IMenu } from "../../types/containers.types"

// import Social from "../Social"

// import data from "../../config/content.json"

const Menu: React.FC<IMenu> = ({ status }) => (
  <Styled status={status}>
    <div>
      <div>Контент</div>
      {/* <Social items={data["social"]} status={status} id="#social" /> */}
    </div>
  </Styled>
)

export default Menu
