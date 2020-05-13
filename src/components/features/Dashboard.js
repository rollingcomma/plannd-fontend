import React, { useEffect, useState } from 'react'
import { useUserState } from '../../context/customerHook'
import { getNotebook, getChecklist, getAlbum, getCategory } from '../../services/apiAction'
import {calculateTimeLeft} from '../../helpers/countdown'
import Checklist from './Checklist';
import Editor from './Editor';
import Links from './Links';
import Album from './Album';
// import DashboardContainer from '../HOC/DashboardContainer'

const Dashboard = () => {

  const [pinedContent, setPinedContent]  = useState({ 
    contentList:null
  })
  
  const [UserState, dispatch] = useUserState()
  
  const [timeLeft, setTimeLeft] = useState(UserState?calculateTimeLeft(UserState.user.trip_plan.time):null)
  
  debugger
  useEffect(() => {
    const pins = UserState.user.pins;
    const requestArr = []
    for(const key of Object.keys(pins)) {
      switch(key) {
        case "notes":
          requestArr.push(getNotebook(UserState.user.preference.activeProject, pins[key]))
          break;
        case "todos":
          requestArr.push(getChecklist(UserState.user.preference.activeProject, pins[key]))
          break;
        case "gallery":
          requestArr.push(getAlbum(UserState.user.preference.activeProject, pins[key]))
          break;
        case "links":
          requestArr.push(getCategory(UserState.user.preference.activeProject, pins[key]))
          break;
      }
    }
    Promise.all(requestArr)
    .then(responses => {
      let content = responses.map(res => res.data)
      setPinedContent({
        contentList: content
      })
    })
    .catch(err => {
      console.log(err.message)
    })
  }, [UserState.user.pins])

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(UserState.user.trip_plan.time));
    }, 1000)
  })

  return (
    <div className="d-flex flex-column main-content-container dashboard-container">
      <div className="d-flex w-100 mb-4 dashboard-banner">
        <div className="d-flex dashboard-banner div-shadow h-100 mr-3">
          <div className="ml-4 my-4">
            <h5>Dashboard</h5>
            <p>Hi, Aneet!</p>
            <p>You have an upcoming trip to {UserState.user.trip_plan.destination} in {timeLeft.days} days!</p>
          </div>
        </div>
        <div className="d-flex flex-column div-shadow countdown-container h-100">
          <div className="countdown-text m-4 mb-2"> 
            <h5>Active Countdown</h5>
            <div id="clockdiv" className="mt-2">
              <div className="ml-2"><span>{timeLeft && timeLeft.days}</span><div className="smalltext">Days</div></div>
              <div className="ml-2"><span>{timeLeft && timeLeft.hours}</span><div className="smalltext">Hours</div></div>
              <div className="ml-2"><span>{timeLeft && timeLeft.minutes}</span><div className="smalltext">Minutes</div></div>
              <div className="ml-2"><span>{timeLeft && timeLeft.seconds}</span><div className="smalltext">Seconds</div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="pins div-shadow w-100 dashboard-features-container d-flex flex-wrap">
       {
          pinedContent.contentList && pinedContent.contentList.length >0 && pinedContent.contentList.map(content => {
            const key = Object.keys(content)
            content[key].onDashboard = true;
            switch (key[0]) {
              case "notebook":
                content.notebook.name="Notes"
                return <div key={content._id} className="dashboard-feature-container">
                  <div className="mx-2 mt-2">
                  <Editor content={content.notebook} />
                </div>
                </div>
              case "checklist":
                content.checklist.name = "To-Dos"
                return <div key={content._id} className="dashboard-feature-container">
                  <div className="mx-2 mt-2 div-shadow">
                  <Checklist content={content.checklist} />
                </div>
                </div>
              case "category": 
                content.category.name = "Links"
                return <div key={content._id} className="dashboard-feature-container">
                  <div className="mx-2 mr-2 div-shadow">
                  <Links content={content.category} />
                  </div>
                </div>
              case "album":
                content.album.name= "Gallery"
                return <div key={content._id} className="dashboard-feature-container">
                  <div className="mx-2 mr-2 div-shadow">
                  <Album content={content.album} />
                  </div>
                </div>
            }
          })
       }  
      </div>
      
    </div>
  )
}

export default Dashboard