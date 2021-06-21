import { StyledCursor } from '../../styled/components'
import { ICursor } from '../../types/components.types'

const Cursor: React.FC<ICursor> = (props) => {
  return (
    <StyledCursor
      style={{
        transform: `translate(${props.x - 2.5}px, ${props.y - 3}px)`,
      }}
    />
  )
}

export default Cursor
