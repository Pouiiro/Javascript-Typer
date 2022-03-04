import React, { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const AppContext = createContext()

const ProviderV = ({ children }) => {
  const [favs, setFavs] = useState([])
  const [apiQuotes, setQuote] = useState([])
  const [qod, setQod] = useState(false)
  const [loading, setLoading] = useState(true)

  const getQuotes = () => {
    setLoading(true)
    setQod(false)
    fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
      .then((response) => response.json())
      .then((data) => {
        const newQuotes = data.quotes.map((quo, index) => quo.text)
        // setQuote(apiQuotes.concat(newQuotes)) //add 4 more quotes
        setQuote(newQuotes)
        setTimeout(() => {
          setLoading(false)
        }, 900)
      })
  }

  const getQod = () => {
    fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
      .then((response) => response.json())
      .then((data) => {
        const newQuotes = data.quotes.map((quo, index) => quo.text)
        setQod(newQuotes)
        setTimeout(() => {
          setLoading(false)
        }, 900)
      })
  }

  useEffect(() => {
    getQod()
    return () => {
      console.log('quoted your day!!')
    }
  }, [])

  const providerValue = { favs, getQuotes, apiQuotes, qod, loading, setFavs }

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  )
}

ProviderV.propTypes = {
  children: PropTypes.any,
}

export default ProviderV
