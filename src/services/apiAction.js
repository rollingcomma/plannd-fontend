import axios from 'axios'

//user related API actions
export const getUser = (formData) => {
  // debugger
  return axios({
    method:'POST',
    url: '/api/index/login/',
    data: formData
  })}
  
export const checkLoggedIn = () => {
  debugger
  return axios({
    url: '/api/users/login/success/',
    method: 'GET',
    // headers: {
    //   Accept: "application/json",
    //   "Content-Type": "application/json",
    //   "Access-Control-Allow-Credentials": true
    // },
    withCredentials: true
  })
}

export const logout = () => {
  debugger
  return axios({
    url: '/api/users/logout',
    method: 'GET'
  })
}

export const postUser = (formData) => {
  debugger
  return axios({
    method:'POST',
    url:'/api/index/register/',
    data:formData
  })
}

//project related API actions
export const getProjects =(userId) => {
  return axios({
    method: 'GET',
    url: '/api/users/projects/',
    params:{userId: userId}
  })
}

//notes related API actions
export const getNotes = (projectId) => {
  return axios({
    method: 'GET',
    url: '/api/users/notes/',
    params: { projectId: projectId }
  })
}

export const addNotebook = (projectId, formData) => {
  return axios({
    method: 'POST',
    url: '/api/users/notes/notebook',
    data: { 
      ...formData,
      projectId: projectId }
  })
}

export const updateNotebook = (projectId, formData) => {
  return axios({
    method: 'PUT',
    url: '/api/users/notes/notebook',
    data: {
      ...formData,
      projectId: projectId
    }
  })
}

export const deleteNotebook = (projectId, notebookId) => {
  return axios({
    method: 'DELETE',
    url: '/api/users/notes/notebook',
    data: {
      projectId: projectId,
      notebookId: notebookId
    }
  })
}

//links related API actions
export const getLinks = (projectId) => {
  return axios({
    method: 'GET',
    url: '/api/users/links/',
    params: { projectId: projectId }
  })
}

export const addCategory = (projectId, formData) => {
  return axios({
    method: 'POST',
    url: '/api/users/links/category',
    data: { 
      ...formData,
      projectId: projectId }
  })
}

export const updateCategory = (projectId, formData) => {
  return axios({
    method: 'PUT',
    url: '/api/users/links/category',
    data: { 
      ...formData,
      projectId: projectId }
  })
}

export const deleteCategory = (projectId, categoryId) => {
  return axios({
    method: 'DELETE',
    url: '/api/users/links/category',
    data: { 
      projectId: projectId, 
      categoryId: categoryId 
    }
  })
}

export const addLink = (projectId, categoryId, formData) => {
  return axios({
    method: 'POST',
    url: '/api/users/links/category/link',
    data: { 
      ...formData,
      categoryId: categoryId,
      projectId: projectId }
  })
}

export const updateLink = (projectId, categoryId, formData) => {
  return axios({
    method: 'PUT',
    url: '/api/users/links/category/link',
    data: { 
      ...formData,
      categoryId: categoryId,
      projectId: projectId }
  })
}

export const deleteLink = (projectId, categoryId, linkId) => {
  return axios({
    method: 'DELETE',
    url: '/api/users/links/category/link',
    data: { 
      projectId: projectId, 
      categoryId: categoryId,
      linkId:linkId 
    }
  })
}

//todos related API actions
export const getTodos = (projectId) => {
  return axios({
    method: 'GET',
    url: '/api/users/todos/',
    params: { projectId: projectId }
  })
}

export const addChecklist = (projectId, formData) => {
  return axios({
    method: 'POST',
    url: '/api/users/todos/checklist',
    data: { 
      ...formData,
      projectId: projectId }
  })
}

export const updateChecklist = (projectId, formData) => {
  return axios({
    method: 'PUT',
    url: '/api/users/todos/checklist',
    data: { 
      ...formData,
      projectId: projectId }
  })
}

export const deleteChecklist = (projectId, checklistId) => {
  return axios({
    method: 'DELETE',
    url: '/api/users/todos/checklist',
    data: { 
      projectId: projectId, 
      checklistId: checklistId 
    }
  })
}

export const addItem = (projectId, checklistId, formData) => {
  return axios({
    method: 'POST',
    url: '/api/users/todos/checklist/item',
    data: { 
      ...formData,
      checklistId: checklistId,
      projectId: projectId }
  })
}

export const updateItem = (projectId, checklistId, formData) => {
  return axios({
    method: 'PUT',
    url: '/api/users/todos/checklist/item',
    data: { 
      ...formData,
      checklistId: checklistId,
      projectId: projectId }
  })
}

export const deleteItem = (projectId, checklistId, itemId) => {
  return axios({
    method: 'DELETE',
    url: '/api/users/todos/checklist/item',
    data: { 
      projectId: projectId, 
      checklistId: checklistId,
      itemId:itemId 
    }
  })
}

//gallery related API actions
export const getGallery = (projectId) => {
  return axios({
    method: 'GET',
    url: '/api/users/gallery/',
    params: { projectId: projectId }
  })
}

export const addAlbum = (projectId, formData) => {
  return axios({
    method: 'POST',
    url: '/api/users/gallery/album',
    data: {
      ...formData,
      projectId: projectId
    }
  })
}

export const updateAlbum = (projectId, formData) => {
  return axios({
    method: 'PUT',
    url: '/api/users/gallery/album',
    data: {
      ...formData,
      projectId: projectId
    }
  })
}

export const deleteAlbum = (projectId, albumId) => {
  return axios({
    method: 'DELETE',
    url: '/api/users/gallery/album',
    data: {
      projectId: projectId,
      albumId: albumId
    }
  })
}

export const addPicture = (projectId, albumId, formData) => {
  return axios({
    method: 'POST',
    url: '/api/users/gallery/album/photo',
    data: {
      ...formData,
      albumId: albumId,
      projectId: projectId
    }
  })
}

export const updatePicture = (projectId, albumId, formData) => {
  return axios({
    method: 'PUT',
    url: '/api/users/gallery/album/photo',
    data: {
      ...formData,
      albumId: albumId,
      projectId: projectId
    }
  })
}

export const deletePicture = (projectId, albumId, pictureIds) => {
  return axios({
    method: 'DELETE',
    url: '/api/users/gallery/album/photo',
    data: {
      projectId: projectId,
      albumId: albumId,
      pictureIds: pictureIds
    }
  })
}

export const updateActiveProject = (userId, projectId) => {
  return axios({
    method: 'PUT',
    url:'/api/users/user',
    data:{
      userId:userId,
      key:'preference.activeProject',
      data:projectId
    }
  })
}

export const updateTheme = (userId, theme) => {
  return axios({
    method: 'PUT',
    url: '/api/users/user',
    data: {
      userId: userId,
      key: 'preference.theme',
      data: theme
    }
  })
}

export const updateDashboard = (userId, newDashboard) => {
  return axios({
    method: 'PUT',
    url: '/api/users/user',
    data: {
      userId: userId,
      key: `dashboard.${newDashboard.key}`,
      data: newDashboard.value
    }
  })
}

export const addPins = (userId, newPin) => {
  return axios({
    method: 'POST',
    url: `/api/users/user/pins/`,
    data: {
      userId: userId,
      data: newPin.value
    }
  })
}

export const deletePins = (userId, pin) => {
  return axios({
    method: 'DELETE',
    url: `/api/users/user/pins/${pin.key}`,
    data: {
      userId: userId,
      data: pin.value
    }
  })
}