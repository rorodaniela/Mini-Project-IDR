let initialState = {
  users: [],
  user: {},
  roles: [],
  companies: []
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_USERS":
      return { ...state, users: action.payload };
    case "FETCH_USER_By_ID":
      return { ...state, user: action.payload };
    case 'CLEAR_USER_BY_ID':
      return { ...state, user: action.payload };
    case "FETCH_ROLES":
      return { ...state, roles: action.payload };
    case "FETCH_COMPANIES":
      return { ...state, companies: action.payload };
    default:
      return state;
  }
}

export default userReducer