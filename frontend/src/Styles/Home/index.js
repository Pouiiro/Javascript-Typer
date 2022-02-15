import styled from 'styled-components'

const Div = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    border: 1px gray solid;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 2%;
    padding-bottom: 2%;
    width: 60%;
    margin-bottom: 2%;
  }
  button {
    padding: 1%;
    cursor: pointer;
  }
`

export default Div
