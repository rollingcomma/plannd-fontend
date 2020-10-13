import React, { useEffect, useState } from 'react'
import { useUserState, useWindowDimensions } from '../../context/customerHook'
import { getNotebook, getChecklist, getAlbum, getCategory } from '../../services/apiAction'
import {calculateTimeLeft} from '../../helpers/countdown'
import Checklist from './Checklist';
import Editor from './Editor';
import Links from './Links';
import Album from './Album';

const Dashboard = () => {

  const [pinedContent, setPinedContent]  = useState({ 
    contentList:null
  })
  
  const [userState] = useUserState()
  const { width } = useWindowDimensions()
  const [timeLeft, setTimeLeft] = useState(userState && userState.user.trip_plan? calculateTimeLeft(userState.user.trip_plan.time) : null)
  
  const loadPinedContent = () => {
    if (userState.projects) {
      const currentProject = userState.projects.filter(project => project._id === userState.user.preference.activeProject)
      
      const pins = currentProject.length>0? currentProject[0].pins:null
      const requestArr = []
      
      if(pins) {
        for (const key of Object.keys(pins)) {
          if(userState.user.dashboard[key]) {
            switch (key) {
              case "notes":
                requestArr.push(getNotebook(userState.user.preference.activeProject, pins[key]))
                break;
              case "todos":
                requestArr.push(getChecklist(userState.user.preference.activeProject, pins[key]))
                break;
              case "gallery":
                requestArr.push(getAlbum(userState.user.preference.activeProject, pins[key]))
                break;
              case "links":
                requestArr.push(getCategory(userState.user.preference.activeProject, pins[key]))
                break;
            }
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
        } else {
          setPinedContent({
            contentList:null
          })
        }
    }
  }

  useEffect(() => {
    loadPinedContent()
  }, [userState.user.preference.activeProject, userState.projects])

  useEffect(() => {
    let timer
    if (userState.user.trip_plan ) 
      timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft(userState.user.trip_plan.time));
      }, 1000)
    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <div className="dashboard-container">
      {userState.user && userState.user.dashboard.countdown ?
      (
        <div className="d-flex w-100 dashboard-banner">
          <div className="d-flex dashboard-banner-text div-shadow">
            <h5>Dashboard</h5>
            <span>Hi, {userState.user.username}!</span>
            <span className="mt-2">You have an upcoming trip to {userState.user.trip_plan.destination} in {timeLeft.days} days!</span>
          </div>
          <div className="d-flex flex-column div-shadow countdown-container h-100">
            <div className="countdown-content"> 
              <h5>Active Countdown</h5>
              <div id="clockdiv">
                <div className="ml-2"><span>{timeLeft && timeLeft.days}</span><div className="smalltext">Days</div></div>
                <div className="ml-2"><span>{timeLeft && timeLeft.hours}</span><div className="smalltext">Hours</div></div>
                <div className="ml-2"><span>{timeLeft && timeLeft.minutes}</span><div className="smalltext">{width > 720? "Minutes":"Mins"}</div></div>
                  <div className="ml-2"><span>{timeLeft && timeLeft.seconds}</span><div className="smalltext">{width > 720 ? "Seconds" : "Secs"}</div></div>
              </div>
            </div>
          </div>
        </div>
      )
      :
      (
        <div className="d-flex w-100 mb-4 dashboard-banner">
          <div className="d-flex dashboard-banner div-shadow h-100 mr-3 w-100">
            <div className="ml-4 my-4">
              <h5>Dashboard</h5>
              <p>Hi, {userState.user.username}!</p>
              {/* <p>You have an upcoming trip to {userState.user.trip_plan.destination} in {timeLeft.days} days!</p> */}
            </div>
          </div>
        </div>
      )  
        }
      
      {/* <div className={`pins dashboard-features-container ${width > 600 ? "div-shadow":""}`}> */}
      <div className="pins dashboard-features-container">
       {
          pinedContent.contentList && pinedContent.contentList.length >0 && pinedContent.contentList.map(content => {
            const key = Object.keys(content)
            if(key.length > 0){
              content[key[0]].onDashboard = true;
              switch (key[0]) {
                case "checklist":
                  content.checklist.name = "To-Dos"
                  return <div key={content._id} className=" dashboard-feature-container">
                    <Checklist content={content.checklist} onDashboard={true} />
                  </div>
                case "notebook":
                  content.notebook.name = "Notes"
                  return <div key={content._id} className=" dashboard-feature-container">
                    <Editor content={content.notebook} onDashboard={true} />
                  </div>
                case "category":
                  content.category.name = "Links"
                  return <div key={content._id} className=" dashboard-feature-container">
                    <Links content={content.category} onDashboard={true} />
                  </div>
                case "album":
                  content.album.name = "Gallery"
                  return <div key={content._id} className=" dashboard-feature-container">
                    <Album content={content.album} onDashboard={true} />
                  </div>
              }
            }
          })
        }  
      </div>
    </div>
  )
}

export default Dashboard