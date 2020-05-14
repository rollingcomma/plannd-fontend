import React from 'react'
import {useUserState} from '../../context/customerHook'
import { addProject } from '../../services/apiAction'
const ProjectForm = () => {

const [UserState, dispatch] = useUserState()
// const [formState, setFormState] = useState({
//   title:null,
//   category:null
// })

const handleSubmit = (evt) => {
  evt.preventDefault()
  const formData = {
    title:evt.target.title,
    category:evt.target.category
  } 
  addProject(UserState.user._id, formData)
  .then(result => {
    if(result.data.success) {
      let projects = UserState.projects
      projects.push({
        _id: result.data.projectId,
        title:formData.title
      })
    }
  })
  .catch(err =>console.log(err.message))
}

  return(
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="control-label" htmlFor="title">Project Name</label>
        <input type="text" className="form-control" name="title" />
      </div>
      <div className="form-group">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="category" id="projectRadios1" value="Trip Planning"/>
            <label className="form-check-label" htmlFor="exampleRadios1">
              Trip Planning
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="category" id="projectRadios2" value="Daily Usage"/>
          <label className="form-check-label" htmlFor="exampleRadios2">
              Daily Usage
          </label>
        </div>
      </div>

      <button variant="primary" type="submit">
        Create Project
      </button>
    </form>
  )
}

export default ProjectForm