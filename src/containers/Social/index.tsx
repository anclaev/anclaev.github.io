import SocialItem from '../../components/SocialItem'

import { ISocial } from '../../types/containers.types'
import { ISocialItem } from '../../types/components.types'

import { StyledSocial } from '../../styled/containers'

const renderSocialLinks = (items: ISocialItem[]) => {
  let links: any = []
  // eslint-disable-next-line array-callback-return
  items.map((item, index) => {
    links.push(<SocialItem id={item.id} link={item.link} key={index} />)
  })
  return links
}

const Social: React.FC<ISocial> = (props) => (
  <StyledSocial>{renderSocialLinks(props.items)}</StyledSocial>
)

export default Social
