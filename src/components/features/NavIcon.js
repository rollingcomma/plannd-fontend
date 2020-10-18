import React from 'react';
import { IconContext } from 'react-icons';
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';


export const BarIcon = (props) => {
  return(
    <IconContext.Provider value={{ size:"2rem" }}>
      <div>
        <FaBars onClick={props.handleOnClick}/>
      </div>
    </IconContext.Provider>
  )
}

export const CloseIcon = (props) => {
  return (
    <IconContext.Provider value={{ size: "2rem" }}>
      <div>
        <MdClose onClick={props.handleOnClick} />
      </div>
    </IconContext.Provider>
  )
}