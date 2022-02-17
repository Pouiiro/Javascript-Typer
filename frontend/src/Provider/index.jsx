import React, { createContext } from 'react'
import PropTypes from 'prop-types'
import StaticQuotes from 'Data/quotes.json'

export const AppContext = createContext()

const ProviderV = ({ children }) => {
  let quoties = StaticQuotes
  let favs = []
  const providerValue = { quoties, favs }
  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  )
}
ProviderV.propTypes = {
  children: PropTypes.any,
}

export default ProviderV
