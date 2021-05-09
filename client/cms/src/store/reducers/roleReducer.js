let initialState = {
  roles: []
};

function roleReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_ROLES":
      return { ...state, roles: action.payload };
    default:
      return state;
  }
}

export default roleReducer;
