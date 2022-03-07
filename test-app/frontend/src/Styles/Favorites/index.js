import styled from 'styled-components'

const Div = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  div {
    border: 1px gray solid;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 2%;
    padding-bottom: 2%;
    margin-bottom: 2%;
  }
  .scrollable {
    border: none;
    width: 80%;
    overflow-y: scroll;
  }
  button {
    padding: 1%;
    cursor: pointer;
  }
`

export default Div
