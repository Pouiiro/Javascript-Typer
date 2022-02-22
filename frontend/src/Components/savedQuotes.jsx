import { Link } from "react-router-dom"
import styled from "styled-components"

const SaveBtn = (props) => {
  return (
    <MyBtn to='/FavouritesQuotes' id='save-btn'>
      {props.btnName}
    </MyBtn>
  )
}

export default SaveBtn

const MyBtn = styled(Link)`
  color: white;
`
