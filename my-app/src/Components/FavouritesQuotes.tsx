import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "../Provider/AppContext"
const FavouriteQuotes = () => {
  const { favQ } = useContext(AppContext)

  return (
    <div className='App'>
      <header className='App-header'>
        <h1> Favorites</h1>
        {favQ.map((quote:string, index:number) => (
          <div key={index}>
            <p>{quote}</p>
          </div>
        ))}
        <NavLink to='/'>Home </NavLink>
      </header>
    </div>
  )
}

export default FavouriteQuotes