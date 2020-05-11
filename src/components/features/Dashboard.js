import React from 'react'
// import DashboardContainer from '../HOC/DashboardContainer'

const Dashboard = (props) => {

  return (
      <div className="d-flex flex-column w-50 dashboard-container">
        <div className="d-flex w-100 mb-4 h-25">
          <div className="d-flex dashboard-banner div-shadow h-100 mr-3">
            <div className="ml-4 my-4">
              <h5>Dashboard</h5>
              <p>Hi, Aneet!</p>
              <p>You have an upcoming trip to Bali in 6 days!</p>
            </div>
          </div>
          <div className="d-flex flex-column div-shadow countdown-container h-100">
            <div className="countdown-text m-4 mb-2"> 
              <h5>Active Countdown</h5>
              <div id="clockdiv">
                <div className="ml-2"><span className="days"></span><div className="smalltext">Days</div></div>
                <div className="ml-2"><span className="hours"></span><div className="smalltext">Hours</div></div>
                <div className="ml-2"><span className="minutes"></span><div className="smalltext">Minutes</div></div>
                <div className="ml-2"><span className="seconds"></span><div className="smalltext">Seconds</div></div>
              </div>
            </div>
            <div className="countdown-clock"> 
              
            </div>
          </div>
        </div>
        <div className="pins div-shadow w-100 h-75">
          <div className="m-3">
          <div className="div-shadow w-50 h-50">
        </div>
        <div className="div-shadow w-50 h-50"></div>
        </div>
        </div>
      </div>
  )
}

export default Dashboard