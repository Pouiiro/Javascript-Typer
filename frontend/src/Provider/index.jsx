import React, { createContext } from 'react'
import PropTypes from 'prop-types'

export const AppContext = createContext()

const ProviderV = ({ children }) => {
  const providerValue = {}
  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  )
}
ProviderV.propTypes = {
  children: PropTypes.any,
}

export default ProviderV
