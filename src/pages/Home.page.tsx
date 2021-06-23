import { StyledPageSubTitle, StyledPageTitle } from '../styled/components'
import { IPage } from '../types/pages.types'

const Home: React.FC<IPage> = (props) => (
  <>
    <StyledPageTitle>{props.title}</StyledPageTitle>
    <StyledPageSubTitle>{props.subtitle}</StyledPageSubTitle>
  </>
)

export default Home
