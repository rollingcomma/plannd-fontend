import React from 'react'

const IndexContainer = (Component) =>  ({width}) => {
  
  return (

    <div className={`d-flex flex-row index-container ${width>600?"div-shadow":""}`}>
      
      {width>800 &&<div className='index-img'>
        <img src="/assets/travel.jpg" alt="" />
      </div>}
      
      <Component ></Component>
    </div>
  )
}

export default IndexContainer