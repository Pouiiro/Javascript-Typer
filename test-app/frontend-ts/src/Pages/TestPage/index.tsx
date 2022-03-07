import { useContext } from 'react'
import { AppContext } from 'Provider'
import { Div } from 'Styles/Home'

const TestPage = () => {
  const myContext = useContext(AppContext)

  return (
    <Div>
      <h1>Favorites</h1>
      {myContext
        ? myContext.favs.map((e) => (
            <div className='Quotediv' key={e.id}>
              <p>{e.quote}</p>
            </div>
          ))
        : ''}
    </Div>
  )
}
export default TestPage
