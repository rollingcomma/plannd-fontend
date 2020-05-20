import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import ProjectForm from '../shared/ProjectForm'
import useUserState from '../../context/customerHook'
import { getProjects } from '../../services/apiAction'

const Project = () => {

  const history = useHistory();
  const [userState, dispatchUser] = useUserState();
 
  const [activeProjectState, setActiveProjectState] = useState(
    {
      projectId: userState.user.preference.activeProject,
      projectTitle: ""
    });

  const handleAfterSubmit = () => {
    let user = userState.user
    user.preference.activeProject = userState.projects[0]._id
    dispatchUser({
      user:user
    })
    setActiveProjectState({
      projectId: userState.projects[0]._id,
      projectTitle: userState.projects[0].title
    })
    history.push("/user/dashboard")
    // getProjects(userState.user._id)
    // .then(res => {
    //   const projects = res.data.projects ? res.data.projects : []
    //   dispatchUser({
    //     "projects": projects
    //   })
    //   if (projects.length > 0 && userState.user.preference.activeProject) {
    //     const activeProject = projects.filter(project => (project._id === userState.user.preference.activeProject))
    //     if(activeProject.length > 0)
    //       setActiveProjectState({
    //         projectId: activeProject[0]._id,
    //         projectTitle: activeProject[0].title
    //       })
        
    //   }
    // })
    // .catch(err => {
    //   console.log(err.message)
    // })
  }

  return (
    <div className="app justify-content classic-primary" >
      <div className="div-shadow d-flex flex-column justify-content-center align-items-center side-container">
        <img src="/assets/logo-text.png" className="logo-text mt-4" alt="" />
        <div className="mx-5 p-5">
          <p>Welcome to the <b>plannd</b> app!</p>
          <p>Before you discover all of the functionalities that our app has to offer, pick a name for your project and choose the category the best fits your needs!</p>
          <ProjectForm handleAfterSubmit={handleAfterSubmit} />
        </div>
        
      </div>
    </div>
  )
}
export default Project