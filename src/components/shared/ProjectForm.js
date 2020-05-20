import React, {useState} from 'react'
import { useForm, ErrorMessage } from 'react-hook-form';
import {useUserState} from '../../context/customerHook'
import { addProject } from '../../services/apiAction'

const ProjectForm = ({handleAfterSubmit}) => {

const [UserState] = useUserState()

const [categoryState, setCategoryState] = useState({
  category:'Trip Planning'
})

const { handleSubmit, register, errors } = useForm();
debugger

const onSubmit = async (formData) => {
  formData.category = categoryState.category
  
  addProject(UserState.user._id, formData)
  .then(result => {
    // if(result.data.success) {
      let projects = UserState.projects
      projects.push({
        _id: result.data.projectId,
        category:categoryState.category,
        title:formData.title
      })
    handleAfterSubmit(result.data.projectId);
    // }
  })
  .catch(err =>console.log(err.message))
}

const handleCategoryChoice = (evt) => {
  const category = evt.target.getAttribute('id')
  setCategoryState({
    category:category
  })
}
  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label className="control-label" htmlFor="title">Project Name</label>
        <input type="text" className="form-control" name="title"
        ref={register({
          required: "Title is required",
          minLength: {
            value: 4, message: "Minimum length of title is 4 characters!"
          }
        })} />
        <ErrorMessage errors={errors} name="title">
          {({ message }) => <p className="text-danger">{message}</p>}
        </ErrorMessage>
      </div>
      <div>
        <div>
          <p>Category</p>
          <div className='btn-group' role='group' aria-label="project-category">
            <button type="button" id="Trip Planning" className="btn btn-light mr-3" onClick={(e) => handleCategoryChoice(e)}><img src="/assets/paper-plane.png" className="icon-small mx-1" alt="trip planning" />Trip Planning</button>
            <button type="button" id="Daily Usage" className="btn btn-light" onClick={(e) => handleCategoryChoice(e)}><img src="/assets/notebook.png" className="icon-small mx-1" alt="trip planning" />Daily Usage</button>
          </div>
        </div>
        <input className="btn create-project-btn mx-auto mt-4" name="newProject" type="submit" value="Create Project" />
      </div>
    </form>
  )
}

export default ProjectForm