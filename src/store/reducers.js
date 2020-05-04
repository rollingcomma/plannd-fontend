
const users = (state = [], action) => {
  debugger
  //refactor to switch case
  switch (action.type) {
    case "GET_USER":
      return{
        
      }
    case "CREATE_USER" :
      return {

      }
  }
  if (action.type === 'GET_USER') {
    return action.rentals;
  } else if (action.type === "CREATE_RENTAL") {
    //create a new arr, NOT mutate the original one
    // const rentals = [...state]
    // rentals.push(action.rental);
    return [...state, action.rental]
  } else {
    return state;
  }
}
export default rentals;