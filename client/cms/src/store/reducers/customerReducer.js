let initialState = {
  customers: [],
  isLoading: true
}

function customerReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_CUSTOMERS":
      return { ...state, customers: action.payload, isLoading: false };
    case "ISLOADING_TRUE":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

export default customerReducer