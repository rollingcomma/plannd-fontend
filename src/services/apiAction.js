import axios from 'axios'

//user related API actions
export const getUser = (formData) => {
  // //debugger
  return axios({
    method:'POST',
    url: '/api/index/login/',
    data: formData
  })}
  
export const checkLoggedIn = () => {
  //debugger
  return axios({
    url: '/api/users/login/success/',
    method: 'GET',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const logout = () => {
  //debugger
  return axios({
    url: '/api/users/logout',
    method: 'GET',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const postUser = (formData) => {
  //debugger
  return axios({
    method:'POST',
    url:'/api/index/register/',
    data:formData,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

//project related API actions
export const getProjects =(userId) => {
  return axios({
    method: 'GET',
    url: '/api/users/projects/',
    params:{userId: userId},
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const addProject = (userId, formData) => {
  return axios({
    method: 'POST',
    url: '/api/users/projects/',
    params: { userId: userId },
    data: {
      ...formData,
      'userId':userId
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}


//notes related API actions
export const getNotes = (projectId) => {
  return axios({
    method: 'GET',
    url: '/api/users/notes/',
    params: { projectId: projectId },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const getNotebook = (projectId, notebookId) => {
  return axios({
    method: 'GET',
    url: '/api/users/notes/notebook',
    params: { 
      projectId: projectId,
      notebookId: notebookId
     },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const addNotebook = (projectId, formData) => {
  return axios({
    method: 'POST',
    url: '/api/users/notes/notebook',
    data: { 
      ...formData,
      projectId: projectId },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const updateNotebook = (projectId, formData) => {
  return axios({
    method: 'PUT',
    url: '/api/users/notes/notebook',
    data: {
      ...formData,
      projectId: projectId
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const deleteNotebook = (projectId, notebookId) => {
  return axios({
    method: 'DELETE',
    url: '/api/users/notes/notebook',
    data: {
      projectId: projectId,
      notebookId: notebookId
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

//links related API actions
export const getLinks = (projectId) => {
  return axios({
    method: 'GET',
    url: '/api/users/links/',
    params: { projectId: projectId },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const getCategory = (projectId, categoryId) => {
  return axios({
    method: 'GET',
    url: '/api/users/links/category',
    params: {
      projectId: projectId,
      categoryId: categoryId
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const addCategory = (projectId, formData) => {
  return axios({
    method: 'POST',
    url: '/api/users/links/category',
    data: { 
      ...formData,
      projectId: projectId },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const updateCategory = (projectId, formData) => {
  return axios({
    method: 'PUT',
    url: '/api/users/links/category',
    data: { 
      ...formData,
      projectId: projectId },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const deleteCategory = (projectId, categoryId) => {
  return axios({
    method: 'DELETE',
    url: '/api/users/links/category',
    data: { 
      projectId: projectId, 
      categoryId: categoryId 
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const addLink = (projectId, categoryId, formData) => {
  return axios({
    method: 'POST',
    url: '/api/users/links/category/link',
    data: { 
      ...formData,
      categoryId: categoryId,
      projectId: projectId 
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
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
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

//todos related API actions
export const getTodos = (projectId) => {
  return axios({
    method: 'GET',
    url: '/api/users/todos/',
    params: { projectId: projectId },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const getChecklist = (projectId, checklistId) => {
  return axios({
    method: 'GET',
    url: '/api/users/todos/checklist',
    params: {
      projectId: projectId,
      checklistId: checklistId
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const addChecklist = (projectId, formData) => {
  return axios({
    method: 'POST',
    url: '/api/users/todos/checklist',
    data: { 
      ...formData,
      projectId: projectId 
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const updateChecklist = (projectId, formData) => {
  return axios({
    method: 'PUT',
    url: '/api/users/todos/checklist',
    data: { 
      ...formData,
      projectId: projectId 
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const deleteChecklist = (projectId, checklistId) => {
  return axios({
    method: 'DELETE',
    url: '/api/users/todos/checklist',
    data: { 
      projectId: projectId, 
      checklistId: checklistId 
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const addItem = (projectId, checklistId, formData) => {
  return axios({
    method: 'POST',
    url: '/api/users/todos/checklist/item',
    data: { 
      checklistId: checklistId,
      projectId: projectId,
      ...formData
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const updateItem = (projectId, checklistId, itemId, formData) => {
  return axios({
    method: 'PUT',
    url: '/api/users/todos/checklist/item',
    data: { 
      checklistId: checklistId,
      projectId: projectId,
      itemId: itemId,
      ...formData
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
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
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

//gallery related API actions
export const getGallery = (projectId) => {
  return axios({
    method: 'GET',
    url: '/api/users/gallery/',
    params: { projectId: projectId },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const getAlbum = (projectId, albumId) => {
  return axios({
    method: 'GET',
    url: '/api/users/gallery/album',
    params: {
      projectId: projectId,
      albumId: albumId
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const addAlbum = (projectId, formData) => {
  return axios({
    method: 'POST',
    url: '/api/users/gallery/album',
    data: {
      ...formData,
      projectId: projectId
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const updateAlbum = (projectId, formData) => {
  return axios({
    method: 'PUT',
    url: '/api/users/gallery/album',
    data: {
      ...formData,
      projectId: projectId
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const deleteAlbum = (projectId, albumId) => {
  return axios({
    method: 'DELETE',
    url: '/api/users/gallery/album',
    data: {
      projectId: projectId,
      albumId: albumId
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const addPicture = (projectId, albumId, formData) => {
  return axios({
    method: 'POST',
    url: '/api/users/gallery/album/image',
    data: {
      ...formData,
      albumId: albumId,
      projectId: projectId
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const updatePicture = (projectId, albumId, formData) => {
  return axios({
    method: 'PUT',
    url: '/api/users/gallery/album/image',
    data: {
      ...formData,
      albumId: albumId,
      projectId: projectId
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const deletePicture = (projectId, albumId, images) => {
  return axios({
    method: 'DELETE',
    url: '/api/users/gallery/album/image',
    data: {
      projectId: projectId,
      albumId: albumId,
      imageIdArr: images
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const updateUser = (userId, key, value) => {
  return axios({
    method: 'PUT',
    url:'/api/users/user',
    data:{
      userId: userId,
      key: key,
      data: value
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
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
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const addProfilePictures = (userId, images) => {
  //debugger
  return axios({
    method: 'POST',
    url: '/api/users/user/pictures',
    data: {
      userId: userId,
      ...images
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const deleteProfilePictures = (userId, images) => {
  return axios({
    method: 'DELETE',
    url: '/api/users/user/pictures',
    data: {
      userId: userId,
      ...images
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const addPin = (projectId, newPin) => {
  return axios({
    method: 'POST',
    url: `/api/users/projects/pins/`,
    data: {
      projectId: projectId,
      key: newPin.key,
      value: newPin.value
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}

export const deletePin = (projectId, pin) => {
  return axios({
    method: 'DELETE',
    url: `/api/users/projects/pins/`,
    data: {
      projectId: projectId,
      key: pin.key
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    withCredentials: true
  })
}