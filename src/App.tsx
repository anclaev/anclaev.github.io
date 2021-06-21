import { useSelector } from 'react-redux'

import content from './config/content.json'

import { State } from './types/store.types'

const App: React.FC = () => {
  const lang = useSelector((state: State) => state.app.lang)
  return <div className="App">App</div>
}

export default App
