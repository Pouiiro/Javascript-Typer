import { Link } from "react-router-dom"
import styled from "styled-components"
import { useContext } from "react"
import { AppContext } from "Provider/AppContext"

const SaveBtn = ({ btnName, link, click }) => {
  const { ArrayWithQuotes, functiondummy } = useContext(AppContext)
  return (
    <MyBtn to={link} id='save-btn' onClick={click}>
      {ArrayWithQuotes[0]}
    </MyBtn>
  )
}

export default SaveBtn

const MyBtn = styled(Link)`
  color: black;
`
