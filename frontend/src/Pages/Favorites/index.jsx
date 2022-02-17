import React, { useContext } from 'react'
import { AppContext } from 'Provider/index'
import Div from 'Styles/Favorites'

const TestPage = () => {
  const { favs } = useContext(AppContext)

  const myFavorites = favs.map((quotes, index) => {
    return (
      <div key={index}>
        <p>{quotes}</p>
      </div>
    )
  })

  return (
    <Div>
      <h1>Favorites</h1>
      <div className='scrollable'>{myFavorites}</div>
    </Div>
  )
}

export default TestPage
