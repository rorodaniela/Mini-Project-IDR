let initialState = {
  users: [],
  user: {},
  roles: [],
  companies: [],
  loading: true,
  isLogin: false
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_USERS":
      return { ...state, users: action.payload, loading: false };
    case "FETCH_USER_By_ID":
      return { ...state, user: action.payload };
    case "CLEAR_USER_BY_ID":
      return { ...state, user: action.payload };
    case "FETCH_ROLES":
      return { ...state, roles: action.payload };
    case "FETCH_COMPANIES":
      return { ...state, companies: action.payload };
    case "LOADING_TRUE":
      return { ...state, loading: true };
    case "LOGIN_SUCCESS":
      return { ...state, isLogin: true };
    case "LOGIN_FALSE":
      return { ...state, isLogin: false };
    default:
      return state;
  }
}

export default userReducer