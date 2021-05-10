const baseUrl = "http://localhost:3001";

export const saveCustomers = (payload) => {
  return{
    type: 'FETCH_CUSTOMERS',
    payload
  }
}

export const getCustomers = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'ISLOADING_TRUE'
      })
      const response = await fetch(baseUrl + "/customer", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "access_token": localStorage.access_token
        }
      });

      const data = await response.json();
      console.log(data, "<<< data customer dari action");
      dispatch(saveCustomers(data))

    } catch (error) {
      console.log(error);
    }
  };
};
