import React, { useState } from 'react'
import Burger from './Burger'
import { StyledMenu } from './StyledMenu'

const Menu = ({toggleProjectPanel, handleLogout}) => {
  const [openState, setOpenState] = useState(false)
  const handleLinkClick = () => {
    setOpenState( !openState );
  }

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