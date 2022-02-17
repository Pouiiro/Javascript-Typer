import React, { useContext } from 'react'
import { AppContext } from 'Provider/index'
import Div from 'Styles/Home'

const Main = () => {
  const { quoties, favs } = useContext(AppContext)
  const myQuotes = Object.values(quoties)

  const favoriteME = (quote) => favs.push(quote)
  const generateQuote = () => console.log('refreshed')

  const results = myQuotes.map((quote, index) => {
    return (
      <div key={index}>
        <p>{quote}</p>
        <button onClick={() => favoriteME(quote)}>Favorite</button>
      </div>
    )
  })

  return (
    <Div>
      <h1>Quotify</h1>
      {results}
      <button onClick={generateQuote}>Quotify Me</button>
    </Div>
  )
}

export default Main
