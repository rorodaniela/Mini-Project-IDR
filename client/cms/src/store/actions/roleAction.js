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
