import axios from 'axios'

export const getUser = (formData) => {
  // debugger
  return axios({
    method:'post',
    url: '/api/index/login/',
    data: formData
  })}
  
export const loginFacebook = () =>{
  return axios({
    method: 'get',
    url: '/api/index/facebook/'
  })
}

export const loginGoogle = () => {
  return axios({
    method: 'get',
    url: '/api/index/google/'
  })
}

export const postUser = (formData) => {
  debugger
  return axios({
    method:'post',
    url:'/api/index/register/',
    data:formData
  })
}
    
  
  
