import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'
import ProjectForm from '../shared/ProjectForm'

const Project = ({projects, activeProject, handleProjectChange, togglePanel}) => {
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
            <button key={project._id} id={project._id} className={activeProject == project._id ? "btn btn-link text-dark dropdown-item selected" :"btn btn-link text-dark dropdown-item"} onClick={(e) => {handleProjectChange(e); togglePanel()}}>{project.title}</button>
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
            <ProjectForm />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default Project;
