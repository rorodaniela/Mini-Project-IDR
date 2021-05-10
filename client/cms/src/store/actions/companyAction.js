const baseUrl = "http://localhost:3001";

export const saveCompanies = (payload) => {
  return {
    type: "FETCH_COMPANIES",
    payload,
  };
};

export const getCompanies = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'ISLOADING_TRUE'
      })

      const response = await fetch(baseUrl + "/company", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
      });

      const data = await response.json();
      dispatch(saveCompanies(data));
      
    } catch (error) {
      console.log(error);
    }
  };
};
