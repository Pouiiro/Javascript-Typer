import { Div } from 'Styles/Home'
import { useContext } from 'react'
import { AppContext } from 'Provider'

const Main = () => {
  const myContext = useContext(AppContext)

  return (
    <Div>
      <h1>Quotify</h1>
      {myContext
        ? myContext.myQuotes.map((e) => (
            <div className='Quotediv' key={e.id}>
              <p>{e.quote}</p>
              <button className='favBtn' type='button'>
                Favorite
              </button>
            </div>
          ))
        : ''}

      <button type='button' className='quotifyBtn'>
        Quotify Me
      </button>
    </Div>
  )
}
export default Main
