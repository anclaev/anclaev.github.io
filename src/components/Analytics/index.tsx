import { YMInitializer } from 'react-yandex-metrika'

const Analytics = () => (
  <YMInitializer
    accounts={[82985923]}
    options={{ clickmap: true, trackLinks: true, accurateTrackBounce: true }}
  />
)

export default Analytics
