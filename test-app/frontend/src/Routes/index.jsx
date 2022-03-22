import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'Pages/Home/index'
import TestPage from 'Pages/Favorites/index'
import Navigation from 'Components/Common/Header/index'

export default () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' exact strict element={<Home />} />
        <Route path='/Test' element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  )
}
