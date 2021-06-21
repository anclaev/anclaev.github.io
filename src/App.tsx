import { useSelector } from 'react-redux'

import data from './config/content.json'

import Style from './styled/root'

import { State } from './types/store.types'

import Helmet from './components/Helmet'

const App: React.FC = () => {
  const lang = useSelector((state: State) => state.app.lang)

  return (
    <>
      <Style />
      <Helmet
        lang={lang}
        description={data[lang].helmet.description}
        title={data[lang].helmet.title}
        keywords={data[lang].helmet.keywords}
        og={data[lang].helmet.og}
      />
    </>
  )
}

export default App
