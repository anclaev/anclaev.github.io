import { Helmet as Head } from "react-helmet"
import { useIntl } from "react-intl"

import { IHelmet } from "../../types/components.types"

const Helmet: React.FC<IHelmet> = ({ lang }) => {
  const intl = useIntl()

  return (
    <Head>
      <html lang={lang} />
      <meta
        name="description"
        content={intl.formatMessage({ id: "helmet_description" })}
      />
      <meta
        name="keywords"
        content={intl.formatMessage({ id: "helmet_keywords" })}
      />
      <meta
        property="og:description"
        content={intl.formatMessage({ id: "helmet_og" })}
      />
      <meta
        property="og:locale"
        content={lang ? lang + "_" + lang.toUpperCase() : undefined}
      />
      <title>{intl.formatMessage({ id: "helmet_title" })}</title>
    </Head>
  )
}

export default Helmet
