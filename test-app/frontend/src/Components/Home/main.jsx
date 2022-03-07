import React, { useContext } from 'react'
import { AppContext } from 'Provider/index'
import { Div, Loadiv } from 'Styles/Home'
import ReactLoading from 'react-loading'
import FadeIn from 'react-fade-in'
import styled from 'styled-components'

const Main = () => {
  const { favs, getQuotes, apiQuotes, qod, loading, setFavs } =
    useContext(AppContext)

  const favoriteME = (quote) => setFavs(favs.concat(quote))

  const results = apiQuotes.map((quote, index) => {
    return (
      <div className='Quotediv' key={index}>
        <p>{quote}</p>
        <button className='favBtn' onClick={() => favoriteME(quote)}>
          Favorite
        </button>
      </div>
    )
  })

  return loading ? (
    <Loadiv>
      <FadeIn>
        <LoadingReact type={'spinningBubbles'} height={100} width={100} />
      </FadeIn>
    </Loadiv>
  ) : (
    <Div>
      <FadeIn>
        <h1>{qod ? 'Quote of the Day ~' : 'Quotify ~'}</h1>
        {qod ? <p className='quoteDaý'>{qod}</p> : results}
        <button className='quotifyBtn' onClick={() => getQuotes()}>
          Quotify Me
        </button>
      </FadeIn>
    </Div>
  )
}

const LoadingReact = styled(ReactLoading)`
  svg {
    fill: ${({ theme }) => theme.background};
  }
`
export default Main
