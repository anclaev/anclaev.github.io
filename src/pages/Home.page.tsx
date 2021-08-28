import { StyledPageSubTitle, StyledPageTitle } from "../styled/components"
import { IPage } from "../types/pages.types"

const Home: React.FC<IPage> = ({ intl }) => {
  return (
    <>
      <StyledPageTitle>
        {intl.formatMessage({ id: "home_title" })}
      </StyledPageTitle>
      <StyledPageSubTitle>
        {intl.formatMessage({ id: "home_subtitle" })}
      </StyledPageSubTitle>
    </>
  )
}

export default Home
