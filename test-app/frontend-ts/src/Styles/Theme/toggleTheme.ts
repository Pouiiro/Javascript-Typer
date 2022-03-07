import styled from 'styled-components'

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
export default Toggly
