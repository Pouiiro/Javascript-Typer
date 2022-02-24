import { createContext } from 'react'

export const AppContext = createContext({})

const ProviderV: React.FC<{ children: unknown }> = ({ children }) => {
  const providerValue = {}
  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  )
}

export default ProviderV
