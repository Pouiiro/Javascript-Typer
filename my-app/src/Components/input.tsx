import React, { useState } from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "../Provider/AppContext" 


const InputC = () => {
  const { functiondummy, quotes, setfavQ, favQ } = useContext(AppContext)
  console.log(quotes)
  return (
    <MyDiv>
      <button onClick={functiondummy}>log me</button>
      {quotes.map((quote:any, index: number) => (
        <div key={index}>
          <p>{quote}</p>
          <button onClick={() => setfavQ([...favQ, quote])}>
            Add to Favorites
          </button>
        </div>
      ))}
      <NavLink to='/favs'>Favs </NavLink>
    </MyDiv>
  )
}

const MyDiv = styled.div`
  padding: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  a {
    padding: 2%;
    text-decoration: none;
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    border: 1px black solid;
    width: 7%;
    margin-top: 2rem;
    background-color: gray;
  }
  button {
    width: 15%;
    padding: 1%;
  }
`
export default InputC