import { BrowserRouter, Routes, Route } from "react-router-dom"
import FavouriteQuotes from "Components/FavouritesQuotes"
import InputC from "Components/input"
const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact strict element={<InputC />} />
        <Route path='/favs' element={<FavouriteQuotes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
