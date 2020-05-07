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

export const loginFacebook = () =>{
  debugger
  // window.open("http://localhost:3010/api/index/facebook", "_self");
  return axios({
    url: '/api/index/login/success/',
    method: 'GET',
    crossDomain: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const loginGoogle = () => {
  debugger
  
  return axios({
    url: 'http://localhost:3010/api/index/login/success',
    method: 'GET',
    crossDomain: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
    
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
    url: '/api/user/links/',
    params:{userId: userId}
  })
}

//notes related API actions
export const getNotes = (projectId) => {
  return axios({
    method: 'GET',
    url: '/api/user/notes/',
    params: { projectId: projectId }
  })
}

export const addNotebook = (projectId, formData) => {
  return axios({
    method: 'POST',
    url: '/api/user/notes/notebook',
    data: { 
      ...formData,
      projectId: projectId }
  })
}

export const updateNotebook = (projectId, formData) => {
  return axios({
    method: 'PUT',
    url: '/api/user/notes/notebook',
    data: {
      ...formData,
      projectId: projectId
    }
  })
}

export const deleteNotebook = (projectId, notebookId) => {
  return axios({
    method: 'DELETE',
    url: '/api/user/notes/notebook',
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
    url: '/api/user/links/',
    params: { projectId: projectId }
  })
}

export const addCategory = (projectId, formData) => {
  return axios({
    method: 'POST',
    url: '/api/user/links/category',
    data: { 
      ...formData,
      projectId: projectId }
  })
}

export const updateCategory = (projectId, formData) => {
  return axios({
    method: 'PUT',
    url: '/api/user/links/category',
    data: { 
      ...formData,
      projectId: projectId }
  })
}

export const deleteCategory = (projectId, categoryId) => {
  return axios({
    method: 'DELETE',
    url: '/api/user/links/category',
    data: { 
      projectId: projectId, 
      categoryId: categoryId 
    }
  })
}

export const addLink = (projectId, categoryId, formData) => {
  return axios({
    method: 'POST',
    url: '/api/user/links/category/link',
    data: { 
      ...formData,
      categoryId: categoryId,
      projectId: projectId }
  })
}

export const updateLink = (projectId, categoryId, formData) => {
  return axios({
    method: 'PUT',
    url: '/api/user/links/category/link',
    data: { 
      ...formData,
      categoryId: categoryId,
      projectId: projectId }
  })
}

export const deleteLink = (projectId, categoryId, linkId) => {
  return axios({
    method: 'DELETE',
    url: '/api/user/links/category/link',
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
    url: '/api/user/todos/',
    params: { projectId: projectId }
  })
}

export const addChecklist = (projectId, formData) => {
  return axios({
    method: 'POST',
    url: '/api/user/todos/checklist',
    data: { 
      ...formData,
      projectId: projectId }
  })
}

export const updateChecklist = (projectId, formData) => {
  return axios({
    method: 'PUT',
    url: '/api/user/todos/checklist',
    data: { 
      ...formData,
      projectId: projectId }
  })
}

export const deleteChecklist = (projectId, checklistId) => {
  return axios({
    method: 'DELETE',
    url: '/api/user/todos/checklist',
    data: { 
      projectId: projectId, 
      checklistId: checklistId 
    }
  })
}

export const addItem = (projectId, checklistId, formData) => {
  return axios({
    method: 'POST',
    url: '/api/user/todos/checklist/item',
    data: { 
      ...formData,
      checklistId: checklistId,
      projectId: projectId }
  })
}

export const updateItem = (projectId, checklistId, formData) => {
  return axios({
    method: 'PUT',
    url: '/api/user/todos/checklist/item',
    data: { 
      ...formData,
      checklistId: checklistId,
      projectId: projectId }
  })
}

export const deleteItem = (projectId, checklistId, itemId) => {
  return axios({
    method: 'DELETE',
    url: '/api/user/todos/checklist/item',
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
    url: '/api/user/gallery/',
    params: { projectId: projectId }
  })
}

export const addAlbum = (projectId, formData) => {
  return axios({
    method: 'POST',
    url: '/api/user/gallery/album',
    data: {
      ...formData,
      projectId: projectId
    }
  })
}

export const updateAlbum = (projectId, formData) => {
  return axios({
    method: 'PUT',
    url: '/api/user/gallery/album',
    data: {
      ...formData,
      projectId: projectId
    }
  })
}

export const deleteAlbum = (projectId, albumId) => {
  return axios({
    method: 'DELETE',
    url: '/api/user/gallery/album',
    data: {
      projectId: projectId,
      albumId: albumId
    }
  })
}

export const addPicture = (projectId, albumId, formData) => {
  return axios({
    method: 'POST',
    url: '/api/user/gallery/album/photo',
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
    url: '/api/user/gallery/album/photo',
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
    url: '/api/user/gallery/album/photo',
    data: {
      projectId: projectId,
      albumId: albumId,
      pictureIds: pictureIds
    }
  })
}

    
  
  
