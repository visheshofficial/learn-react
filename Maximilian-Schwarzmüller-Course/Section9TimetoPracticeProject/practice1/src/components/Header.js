import logo from '../assets/investment-calculator-logo.png'
import styled from 'styled-components'

const StyledHeader = styled.header`
  text-align: center;
  margin: 3rem auto;

  & img {
    width: 5rem;
    height: 5rem;
    object-fit: contain;
    background-color: transparent;
  }

  & h1 {
    font-size: 1.5rem;
  }
`
const Header = () => {
  return (
    <StyledHeader>
      {/* <header className="header"> */}
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
      {/* </header> */}
    </StyledHeader>
  )
}

export default Header
