import React from 'react'
import { useHistory } from 'react-router-dom';
import ProjectForm from '../shared/ProjectForm'

const Project = () => {
  const history = useHistory();
  const handleAfterSubmit = () => {
    history.push("/")
  }
  return (
    <div className="d-flex flex-column justify-content-center align-items-center side-container">
      <img src="/assets/logo-text.png" className="logo-text mt-4 mb-2" alt="" />
      <p>Welcome to the <b>plannd</b> app!</p>
      <p>Before you discover all of the functionalities that ourapp has to offer, pick a name for your project and choose the category the best fits your needs!</p>
      <ProjectForm handleAfterSubmit={handleAfterSubmit}/>
    </div>
  )
}
export default Project