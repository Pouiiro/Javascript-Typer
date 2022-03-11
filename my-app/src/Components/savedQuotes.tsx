import { Link } from "react-router-dom"
import styled from "styled-components"

interface SaveBtn {
    btnName: string
    link: string
    click: React.MouseEventHandler 
}

const SaveBtn = ( {btnName, link, click}: SaveBtn ) => {
  return (
    <MyBtn to={link} id='save-btn' onClick={click}>
      {btnName}
    </MyBtn>
  )
}

export default SaveBtn

const MyBtn = styled(Link)`
  color: black;
`
