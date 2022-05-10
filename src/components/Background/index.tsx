import { useMemo } from 'react'

import { StyledBackground } from '../../styled/components'

import { IBackground } from '../../types/components.types'

const Background: React.FC<IBackground> = ({
  autoplay = true,
  loop = true,
  muted = true,
  opacity,
}) => {
  const isMobile: boolean = useMemo(
    () => window.innerWidth <= 576 || window.innerHeight <= 415,
    []
  )

  return (
    <StyledBackground transparency={opacity ?? '0.2'}>
      <video
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
        poster="media/rain.webp"
      >
        {!isMobile && <source src="media/rain.mp4" type="video/mp4" />}
      </video>
    </StyledBackground>
  )
}

export default Background
