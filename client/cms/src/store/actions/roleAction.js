const baseUrl = "http://localhost:3001";

export const saveRoles = (payload) => {
  return {
    type: "FETCH_ROLES",
    payload,
  };
};


export const getRoles = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'ISLOADING'
      })
      const response = await fetch(baseUrl + "/role", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
      });

      const data = await response.json();
      dispatch(saveRoles(data));
      
    } catch (error) {
      console.log(error);
    }
  };
};

export const saveRolesId = (payload) => {
  return {
    type: "FETCH_ROLES_ID",
    payload,
  };
};
export const getRoleByID = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'ISLOADING'
      })
      const response = await fetch(baseUrl + `/role/${id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
      });

      const data = await response.json();
      // console.log(data, "<<< data role by id from action");
      dispatch(saveRolesId(data));
      
    } catch (error) {
      console.log(error);
    }
  };
};

export const saveEntity = (payload) => {
  return {
    type: "FETCH_ENTITY",
    payload,
  };
};
export const getEntity = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'ISLOADING'
      })
      const response = await fetch(baseUrl + `/entity`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
      });

      const data = await response.json();
      dispatch(saveEntity(data));
      
    } catch (error) {
      console.log(error);
    }
  };
};

export const saveAction = (payload) => {
  return {
    type: "FETCH_ACTION",
    payload,
  };
};

export const getAction = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "ISLOADING",
      });
      const response = await fetch(baseUrl + `/action`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
      });

      const data = await response.json();
      dispatch(saveAction(data));

    } catch (error) {
      console.log(error);
    }
  };
};

export const saveRoleDetail = (payload) => {
  return {
    type: "FETCH_ROLE_DETAIL",
    payload,
  };
};

export const getRoleDetail = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + `/checkrole`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
      });

      const data = await response.json();
      dispatch(saveRoleDetail(data));
    } catch (error) {
      console.log(error);
    }
  };
};