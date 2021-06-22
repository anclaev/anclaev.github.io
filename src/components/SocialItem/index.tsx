import { ReactComponent as VKIcon } from '../../assets/svg/VK.svg'
import { ReactComponent as GithubIcon } from '../../assets/svg/Github.svg'
import { ReactComponent as InstagramIcon } from '../../assets/svg/Instagram.svg'
import { ReactComponent as TelegramIcon } from '../../assets/svg/Telegram.svg'

import { StyledSocialLink } from '../../styled/components'

import { ISocialItem } from '../../types/components.types'

const selectItem = (id: string) => {
  switch (id) {
    case 'vk':
      return <VKIcon />
    case 'github':
      return <GithubIcon />
    case 'insta':
      return <InstagramIcon />
    case 'telegram':
      return <TelegramIcon />
    default:
      return <VKIcon />
  }
}

const SocialItem: React.FC<ISocialItem> = (props) => (
  <StyledSocialLink
    href={props.link}
    target="_blank"
    rel="noreferrer"
    className="cursor"
  >
    {selectItem(props.id)}
  </StyledSocialLink>
)

export default SocialItem
