import { Link } from "react-router-dom"
import styled from "styled-components"

const SaveBtn = () => {
  return (
    <MyBtn to='/FavouritesQuotes' id='save-btn' name='Artur'>
      Favourites Quotes
    </MyBtn>
  )
}

export default SaveBtn

const MyBtn = styled(Link)`
  color: white;
`
