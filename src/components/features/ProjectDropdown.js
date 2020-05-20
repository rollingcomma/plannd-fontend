import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'
import ProjectForm from '../shared/ProjectForm'

const ProjectDropdown = ({ projects, activeProject, handleProjectChange, togglePanel, handleAfterSubmit}) => {
  debugger
  return(
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="button" eventKey="0">
           Open an existing project
      </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{projects && projects.map(project =>
            <button key={project._id} id={project._id} 
              className={`btn btn-link text-dark dropdown-item ${activeProject === project._id ? "selected":""}`} 
              onClick={(e) => {handleProjectChange(e); togglePanel()}}>{project.title}</button>
          )}</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="button" eventKey="1">
            Create a new project
      </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <ProjectForm handleAfterSubmit={handleAfterSubmit}/>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default ProjectDropdown;
