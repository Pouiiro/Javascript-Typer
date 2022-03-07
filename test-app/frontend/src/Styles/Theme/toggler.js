import React from 'react'
import { ReactComponent as Moon } from 'Assets/svg/moon.svg'
import { ReactComponent as Sun } from 'Assets/svg/sun.svg'
import styled from 'styled-components'
import PropTypes from 'prop-types'

let checked

const Toggle = ({ theme, toggleTheme }) => {
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

const Toggly = styled.div`
  z-index: 99;
  width: 3.5rem;
  height: 3.5rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  position: absolute;
  top: 0.6rem;
  right: 1rem;
  cursor: pointer;
  @media (max-width: 767px) {
    top: 1rem;
    right: 6rem;
  }
  .c-toggle__body {
    display: flex;
    flex-direction: column;
    align-items: right;
    width: 100%;
    position: absolute;
    transition: all 320ms ease-out 100ms;
  }
  .c-toggle__icon {
    width: 50%;
    margin: auto;
  }
`
