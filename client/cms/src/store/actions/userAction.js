const baseUrl = "http://localhost:3000";

export const login = (payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + "/login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      
      const data = await response.json();
      localStorage.setItem("access_token", data.access_token);

    } catch (error) {
      console.log(error);
    }
  };
};
