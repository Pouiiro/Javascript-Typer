import { BrowserRouter,Routes, Route } from "react-router-dom"
import FavouriteQuotes from "/home/arturm/Documents/Js-Ts/my-app/src/Components/FavouritesQuotes"
import InputC from "/home/arturm/Documents/Js-Ts/my-app/src/Components/input"


const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InputC />} />
        <Route path='/favs' element={<FavouriteQuotes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
