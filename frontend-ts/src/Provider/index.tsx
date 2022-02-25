import { createContext, useState } from 'react'
import { nanoid } from 'nanoid'

type ContextProps = {
  myQuotes: Array<{ quote: string; id: string }>
}

export const AppContext = createContext<ContextProps | null>(null)

const ProviderV: React.FC = ({ children }) => {
  const myQuotes: Array<{ quote: string; id: string }> = [
    { quote: 'Dummy Quote 1', id: nanoid() },
    { quote: 'Dummy Quote 2', id: nanoid() },
    { quote: 'Dummy Quote 3', id: nanoid() },
    { quote: 'Dummy Quote 4', id: nanoid() },
  ]
  // const [favs, addFavs] = useState([])

  const providerValue = { myQuotes }
  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  )
}

export default ProviderV
