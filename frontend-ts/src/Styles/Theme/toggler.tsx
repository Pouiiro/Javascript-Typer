import React from 'react'
import PropTypes from 'prop-types'
import Toggly from './toggleTheme'
import { ReactComponent as Moon } from '../../Assets/svg/moon.svg'
import { ReactComponent as Sun } from '../../Assets/svg/sun.svg'

let checked

interface ThemeTogglerProps {
  toggleTheme: () => void
  theme: string
}

function Toggle({ theme, toggleTheme }: ThemeTogglerProps) {
  if (theme === 'light') {
    checked = false
  } else {
    checked = true
  }
  return (
    <Toggly onClick={toggleTheme} className='c-toggle' id='theme'>
      <div className='c-toggle__body'>
        {checked ? (
          <Sun fill={checked ? 'white' : 'black'} className='c-toggle__icon' />
        ) : (
          <Moon fill={checked ? 'white' : 'black'} className='c-toggle__icon' />
        )}
      </div>
    </Toggly>
  )
}

Toggle.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
}

export default Toggle
