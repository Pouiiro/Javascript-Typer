import styled from 'styled-components'

const MyNav = styled.nav`
  padding: 2%;
  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    font-size: 1.2em;
    text-transform: uppercase;
    font-weight: 500;
    display: inline-block;
    width: 80px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
  a:hover {
    color: #fddb3a;
  }
  .active {
    color: ${({ theme }) => theme.activeLink};
  }
`
export default MyNav
