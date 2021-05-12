let initialState = {
  roles: [],
  roleById: [],
  roleDetails: [],
  entity:[],
  isLoading: true,
  actions: [],

};

function roleReducer(state = initialState, action) {
  switch (action.type) {
    case "ISLOADING":
      return { ...state, isLoading: true };
    case "FETCH_ROLES":
      return { ...state, roles: action.payload, isLoading: false };
    case "FETCH_ROLES_ID":
      return { ...state, roleById: action.payload, isLoading: false };
    case "FETCH_ENTITY":
      return { ...state, entity: action.payload, isLoading: false };
    case "FETCH_ACTION":
      return { ...state, actions: action.payload, isLoading: false };
    case "FETCH_ROLE_DETAIL":
      return { ...state, roleDetails: action.payload };
    default:
      return state;
  }
}

export default roleReducer;
