import { YMInitializer } from 'react-yandex-metrika'

const Analytics = () => (
  <YMInitializer
    accounts={[88737698]}
    options={{ clickmap: true, trackLinks: true, accurateTrackBounce: true }}
  />
)

export default Analytics
