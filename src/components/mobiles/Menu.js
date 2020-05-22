import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Burger from './Burger'

const Menu = ({toggleProjectPanel, handleLogout}) => {
  const [openState, setOpenState] = useState(false)
  const handleLinkClick = () => {
    setOpenState( !openState );
  }

  const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #EFFFFA;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  height: 45vh;
  text-align: left;
  padding: 1rem;
  position: absolute;
  top: 0;
  right: 0;
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
  return (
    <div>
      <Burger
        open={openState}
        setOpen={setOpenState}
      />
      <StyledMenu open={openState}>
        <a href="#" className="text-dark" onClick={() => { handleLinkClick(); toggleProjectPanel()}}>
          <img alt="" src="/assets/project-icon.png" className="icon-small" />Browse Projects</a>
        <a href="/user/dashboard" className="text-dark" onClick={() => handleLinkClick()}><img alt="" src="/assets/dashboard-icon.svg" className="icon-small" />Dashboard</a>
        <a href="/user/profile" onClick={() => handleLinkClick()}><img alt="" src="/assets/gear.png" className="icon-small" />Profile Setting</a>
        <a href="/login" onClick={() => { handleLinkClick(); handleLogout()}}><img alt="" src="/assets/signs.png" className="icon-small" />Log Out</a>
      </StyledMenu>
    </div>
  )
}

export default Menu