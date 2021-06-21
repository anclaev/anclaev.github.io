import { useSelector } from 'react-redux'

import { State } from './types/store.types'

import Helmet from './components/Helmet'

import data from './config/content.json'

const App: React.FC = () => {
  const lang = useSelector((state: State) => state.app.lang)

  return (
    <>
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
