import { Helmet as Head } from 'react-helmet'

import { IHelmet } from '../../types/components.types'

const Helmet: React.FC<IHelmet> = (props) => (
  <Head>
    <html lang={props.lang} />
    <meta name="description" content={props.description} />
    <meta name="keywords" content={props.keywords} />
    <meta property="og:description" content={props.og} />
    <meta
      property="og:locale"
      content={
        props.lang ? props.lang + '_' + props.lang.toUpperCase() : undefined
      }
    />
    <title>{props.title}</title>
  </Head>
)

export default Helmet
