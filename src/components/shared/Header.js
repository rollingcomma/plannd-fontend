import React, {useEffect, useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import { logout, getProjects, updateActiveProject } from '../../services/apiAction'
import { useUserState, useProjectsState } from '../../context/customerHook';
import $ from 'jquery'

const Header = () =>{
  const history = useHistory();
  const [userState, dispatchUser] = useUserState();
  const [projectsState, dispatchProject] = useProjectsState();
  
  // const activeProject = projectsState.filter(project => (project._id == activeProjectState))
  debugger
  const [activeProjectState, setActiveProjectState] = useState(
    {
      projectId: userState.user.preference.activeProject,
      projectTitle: ""
    });
  
  const handleLogout = () => {
    dispatchUser({
      isLoggedIn: false,
      user:null
    })
    window.sessionStorage.clear()
    logout()
    .then(res => {
      history.push('/login')
    })
  }

  const handleProjectChange = (e) => {
    debugger
    const projectId = $(e.target).attr('id')
    const projectTitle = $(e.target).text()
    
    updateActiveProject(userState.user._id, projectId)
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

  useEffect(() => {
    debugger
    if (!userState.projects) {
      getProjects(userState.user._id)
      .then(res => {
        const projects = res.data.projects
        dispatchUser({
          "projects": projects
        })
        const activeProject = projects.filter(project => (project._id === userState.user.preference.activeProject))
        setActiveProjectState({
          projectId: activeProject[0]._id,
          projectTitle: activeProject[0].title
        })
      })
      .catch(err => {
        console.log(err.message)
      })
    } else {
      const activeProject = userState.projects.filter(project => (project._id === userState.user.preference.activeProject))
      setActiveProjectState({
        projectId: activeProject[0]._id,
        projectTitle: activeProject[0].title
      })
    }
    
  },[])

  return (
    <div className="top-banner">
      <div className="d-flex w-75">
        <div className="logo">
          <img alt="" src="/assets/logo-horizontal.png" className="header_logo" />
        </div>
        <div className="d-flex flex-row align-items-center pl-5 ml-5 w-75">
          <div className="current-trip">
            <p id="bali-text">{activeProjectState && activeProjectState.projectTitle}</p>
            <div className="vertical-line"></div>
          </div>
          <div className="dashboard-link">
          <img alt="" src="/assets/dashboard-icon.svg" className="dashboard-icon" />
            <Link to="/user/dashboard" className="text-dark">Dashboard</Link>
          </div>
          <div className="project-link">
            <img alt="" src="/assets/project-icon.png" className="project-icon" />
            <div className="nav-item dropdown">
              <button className="btn btn-link text-dark account-name dropdown-toggle" id="projects-dropdwon-menu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Browse Projects</button>
              <div className="dropdown-menu" aria-labelledby="project-dropdwon-menu">
                {userState.projects && userState.projects.map(project => 
                  <button key={project._id} id={project._id} className="btn btn-link text-dark dropdown-item" onClick={(e) => handleProjectChange(e)}>{project.title}</button>
                )}
                <div className="dropdown-divider"></div>
                <button className="btn btn-link text-dark dropdown-item" href="#">Create a new project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="login">
        <img alt="" src="/assets/profile-photo.jpg" className="profile-photo" />
        <div className="nav-item dropdown">
          <button className="btn btn-link text-dark account-name dropdown-toggle" id="dropdwon-menu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {userState.user.username}</button>
          <div className="dropdown-menu" aria-labelledby="dropdwon-menu">
            <Link className="dropdown-item" to="/login" onClick={() => handleLogout()}><img alt="" src="/assets/signs.png" className="icon-small" />Log Out</Link>
            <Link className="dropdown-item" to="/user/profile"><img alt="" src="/assets/gear.png" className="icon-small" />Profile Setting</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
  

export default Header;