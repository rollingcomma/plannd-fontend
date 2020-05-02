import React from 'react'


const DashboardContainer = (Component) => ({ content }) => {
  return (
    <div>

      <Component content={content}></Component>
    </div>
  )
}

export default DashboardContainer