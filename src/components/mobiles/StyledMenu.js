import styled from 'styled-components'
export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #EFFFFA;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  transform-origin:right;
  height: 45vh;
  text-align: left;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.5s ease-in-out;

  @media (max-width: 600px) {
      width: 55%;
    }

  @media (max-width: 500px) {
    width: 65%;
  }

  @media (max-width: 400px) {
    width: 70%;
  }

  a, button {
    font-size: 0.7rem;
    text-transform: uppercase;
    padding: 0.6rem 0;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: #343078;
    }
  }
`