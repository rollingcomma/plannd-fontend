import React from 'react'


const IndexContainer = (Component) =>  ({content}) => {
  return (
    <div className='d-flex flex-row index-container'>
      
      <div className='index-img'>
        <img src="/assets/travel.jpg" alt="" />
      </div>
      <Component content={content}></Component>
    </div>
  )
}

export default IndexContainer