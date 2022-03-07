import { createContext, useState, useEffect } from 'react'
import { nanoid } from 'nanoid'

interface ContextProps {
  myQuotes: Array<{ quote: string; id: string }>
  favs: Array<{ quote: string; id: string }>
  pushQuote: (e: { quote: string; id: string }) => void
}

export const AppContext = createContext<ContextProps | null>(null)

const ProviderV: React.FC = ({ children }) => {
  const myQuotes: Array<{ quote: string; id: string }> = [
    { quote: 'Dummy Quote 1', id: nanoid() },
    { quote: 'Dummy Quote 2', id: nanoid() },
    { quote: 'Dummy Quote 3', id: nanoid() },
    { quote: 'Dummy Quote 4', id: nanoid() },
  ]
  const [favs, addFavs] = useState<Array<{ quote: string; id: string }>>([])
  const pushQuote = (e: { quote: string; id: string }) => {
    addFavs([...favs, e])
    // addFavs(favs.concat(e))

    return ''
  }
  const providerValue: ContextProps = { myQuotes, favs, pushQuote }
  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  )
}

export default ProviderV
