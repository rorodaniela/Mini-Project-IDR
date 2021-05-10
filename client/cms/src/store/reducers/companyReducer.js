let initialState = {
  companies: [],
  isLoading: true
};

function companyReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_COMPANIES":
      return { ...state, companies: action.payload, isLoading: false };
    case "ISLOADING_TRUE":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

export default companyReducer
