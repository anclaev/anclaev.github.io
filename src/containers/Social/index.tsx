import SocialItem from '../../components/SocialItem'

import { ISocial } from '../../types/containers.types'
import { ISocialItem } from '../../types/components.types'

const renderSocialLinks = (items: ISocialItem[]) => {
  let links: any = []
  // eslint-disable-next-line array-callback-return
  items.map((item, index) => {
    links.push(<SocialItem id={item.id} link={item.link} key={index} />)
  })
  return links
}

const Social: React.FC<ISocial> = (props) => {
  return renderSocialLinks(props.items)
}

export default Social
