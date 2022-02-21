import { BrowserRouter, Routes, Route } from "react-router-dom"
import FavouriteQuotes from "Components/FavouritesQuotes"
import InputQuotes from "Components/input"
const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact strict element={<InputQuotes />} />
        <Route path='/FavouritesQuotes' element={<FavouriteQuotes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
