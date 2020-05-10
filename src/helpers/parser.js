export const sessionStorageParser = (value) => {
  //if value is null, retrieving from sessionStorage
  //else store value to sessionStorage
  // if(value === 'user' || value ==='projects') {
    debugger
    
    if(!value){
    //   return sessionStorage.getItem('projects')?{projects:JSON.parse(sessionStorage.getItem('projects'))}:null
    // }
    const storage = { ...sessionStorage };
    for (const key of Object.keys(storage)) {
      storage[key] = JSON.parse(storage[key])
    }
    return storage
  } else {
    for(const key of Object.keys(value)){
      if(typeof value[key] == 'object')
        sessionStorage.setItem(key, JSON.stringify(value[key]))
      else
        sessionStorage.setItem(key,value[key])
    }
  }
  
 
}