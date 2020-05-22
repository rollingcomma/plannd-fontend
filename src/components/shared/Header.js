import React, {useEffect, useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import { logout, getProjects, updateUser } from '../../services/apiAction';
import { useUserState, useWindowDimensions } from '../../context/customerHook';
import ProjectDropdown from '../features/ProjectDropdown';
import $ from 'jquery';
import Menu from '../mobiles/Menu';
// import { Accordion, Card } from 'react-bootstrap'

const Header = () =>{
  const history = useHistory();
  const [userState, dispatchUser] = useUserState();
  const [projectPanelState, setProjectPanelState] = useState({open:false});
  const { width } = useWindowDimensions();
  
  const [activeProjectState, setActiveProjectState] = useState(
    {
      projectId: userState.user ? userState.user.preference.activeProject : null,
      projectTitle: ""
    });
  
  const handleLogout = () => {
    dispatchUser({
      isLoggedIn: false,
      projects:null,
      user:null
    })
    window.sessionStorage.clear()
    logout()
    .then(res => {
      history.push('/login')
    })
  }

  const handleProjectChange = (e) => {
    
    const projectId = $(e.target).attr('id')
    const projectTitle = $(e.target).text()
    
    updateUser(userState.user._id, 'preference.activeProject', projectId)
    .then(res => {
      setActiveProjectState({
        projectId: projectId,
        projectTitle: projectTitle
      })
      let user = userState.user
      user.preference.activeProject = projectId
      dispatchUser({
        "user": user
      })
    })
    .catch(err => {
        console.log(err)
    })
  }

  const profile_photo = () =>{
    const profile = userState.user.pictures.filter(picture => picture._id === userState.user.profile_photo)
    return profile[0].src
  }

  useEffect(() => {
    // //debugger
    if (!userState.projects) {
      getProjects(userState.user._id)
      .then(res => {
        const projects = res.data.projects? res.data.projects:[]
        dispatchUser({
          "projects": projects
        })
        if(projects.length > 0) {
          const activeProject = projects.filter(project => (project._id === userState.user.preference.activeProject))
          setActiveProjectState({
            projectId: activeProject[0]._id,
            projectTitle: activeProject[0].title
          })
        }
      })
      .catch(err => {
        console.log(err.message)
      })
    } else {
      // if(userState.user.preference.activeProject) {
        const activeProject = userState.projects.filter(project => (project._id === userState.user.preference.activeProject))
        if(activeProject.length > 0)
          setActiveProjectState({
            projectId: activeProject[0]._id,
            projectTitle: activeProject[0].title
          })
      // } 
    }
  }, [userState.user && userState.user.preference.activeProject])

  const toggleProjectPanel = () => {
    setProjectPanelState ({open:!projectPanelState.open});
  }

  const handleAfterSubmit = () => {
    setProjectPanelState({ open: !projectPanelState.open });
  }

  

  return (
    <div>
      <div className="top-banner">
        {width > 600 ?
        <div className="d-flex flex-row w-100">
          <div className="d-flex align-items-center w-25 ">
            <img alt="" src="/assets/logo-horizontal.png" className="header_logo" />
          </div>
          <div className="d-flex justify-content-between w-75">
            <div className="d-flex flex-row justify-content-start align-items-center w-75">
              <div className="current-trip">
                <span className="align-middle" id="bali-text">{activeProjectState && activeProjectState.projectTitle}</span>
                <div className="vertical-line"></div>
              </div>
              <div className="dashboard-link">
                <img alt="" src="/assets/dashboard-icon.svg" className="dashboard-icon" />
                <Link to="/user/dashboard" className="text-dark">Dashboard</Link>
              </div>
              <div className="project-link">
                <img alt="" src="/assets/project-icon.png" className="project-icon" />
                <div className="dropdown">
                  <button className="btn btn-link text-dark account-name" onClick={() => toggleProjectPanel()}>
                    Browse Projects</button>
                </div>
              </div>
            </div>
            <div className="login">
              <img alt="" src={userState.user && userState.user.profile_photo ? userState.user.profile_photo.src  : "http://craiglist2.s3-website.ca-central-1.amazonaws.com/plannd/default-user-icon.jpg"} className="profile-photo" />
              <div className="nav-item dropdown">
                <button className="btn btn-link text-dark account-name dropdown-toggle" id="dropdwon-menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {userState.user.username}</button>
                <div className="dropdown-menu" aria-labelledby="dropdwon-menu">
                  <Link className="dropdown-item" to="/login" onClick={() => handleLogout()}><img alt="" src="/assets/signs.png" className="icon-small" />Log Out</Link>
                  <Link className="dropdown-item" to="/user/profile"><img alt="" src="/assets/gear.png" className="icon-small" />Profile Setting</Link>
                </div>
              </div>
            </div>
          </div>
          </div>
          :
          <div className="d-flex flex-row justify-content-between w-100">
            <Menu handleLogout={handleLogout} toggleProjectPanel={toggleProjectPanel}/>
            <div className="d-flex align-items-center w-25 mr-5">
              <img alt="" src="/assets/logo-horizontal.png" className="header_logo" />
            </div>
          </div>}
        </div>
     {projectPanelState.open  && <div className={`project-nav ${userState && userState.user.preference.theme}-primary`}>
        {userState.projects && 
          <ProjectDropdown 
            projects={userState.projects} 
            activeProject={activeProjectState.projectId} 
            handleProjectChange={handleProjectChange} 
            togglePanel={toggleProjectPanel}
            handleAfterSubmit={handleAfterSubmit}/>}
      </div>}
    </div>
  )
}
  

export default Header;