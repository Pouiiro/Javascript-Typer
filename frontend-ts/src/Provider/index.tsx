import React, { createContext } from 'react'

export const AppContext = createContext({})

const ProviderV = ({ children }: any) => {
  const providerValue = {}
  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  )
}

export default ProviderV
