import React from 'react'

const IndexContainer = (Component) =>  ({width}) => {
  debugger
  return (

    <div className='d-flex flex-row div-shadow index-container'>
      
      {width>800 &&<div className='index-img'>
        <img src="/assets/travel.jpg" alt="" />
      </div>}
      
      <Component ></Component>
    </div>
  )
}

export default IndexContainer