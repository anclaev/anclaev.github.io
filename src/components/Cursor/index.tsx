import { StyledCursor } from '../../styled/components'
import { ICursor } from '../../types/components.types'

const Cursor: React.FC<ICursor> = (props) => (
  <StyledCursor
    style={{
      transform: `translate(calc(${props.x}px - 50%), calc(${props.y}px - 50%))`,
    }}
    data-status={props.status}
  />
)

export default Cursor
