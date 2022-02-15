import React from 'react'
import { NavLink } from 'react-router-dom'
import MyNav from './style'

const Navigation = () => {
  return (
    <MyNav id='mynav'>
      <NavLink end to='/'>
        Quotify
      </NavLink>
      <NavLink to='/test'>Favorites</NavLink>
    </MyNav>
  )
}

export default Navigation
