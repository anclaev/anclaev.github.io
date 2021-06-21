import { StyledBackground } from '../../styled/components'
import { IBackground } from '../../types/components.types'

const Background: React.FC<IBackground> = ({
  autoplay = true,
  loop = true,
  muted = true,
  opacity,
}) => (
  <StyledBackground transparency={opacity ?? '0.2'}>
    <video autoPlay={autoplay} loop={loop} muted={muted}>
      <source src="media/rain.mp4" type="video/mp4" />
    </video>
  </StyledBackground>
)

export default Background
