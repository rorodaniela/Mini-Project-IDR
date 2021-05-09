let initialState = {
  customers: []
}

function customerReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_CUSTOMERS":
      return {...state, customers: action.payload}
    default:
      return state
  }
}

export default customerReducer