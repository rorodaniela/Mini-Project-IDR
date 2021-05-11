import Swal from 'sweetalert2'
const baseUrl = "http://localhost:3001";

export const logout = () => {
  return {
    type: "LOGIN_FALSE",
  };
}

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

      if (data.access_token) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: data.id
        });
        localStorage.setItem("access_token", data.access_token) 
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Success",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Username or password invalid",
            showConfirmButton: false,
            timer: 2000,
          });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const saveUsers = (payload) => {
  return {
    type: 'FETCH_USERS',
    payload
  }
}

export const getUsers = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'LOADING_TRUE'
      })
      const response = await fetch(baseUrl + "/users", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "access_token": localStorage.access_token
        }
      });

      const data = await response.json();
      dispatch(saveUsers(data))

    } catch (error) {
      console.log(error);
    }
  };
};

export const saveUserById = (payload) => {
  return {
    type: "FETCH_USER_By_ID",
    payload,
  };
};

export const clearUserById = () => {
  return {
    type: 'CLEAR_USER_BY_ID',
    payload : {}
  }
}

export const getUserByID = (payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + `/users/${payload}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
      });

      const data = await response.json();
      dispatch(saveUserById(data));
      
    } catch (error) {
      console.log(error);
    }
  };
};

export const createUser = (payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + `/createUser`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      dispatch(getUsers());
    } catch (error) {
      console.log(error);
    }
  };
};

export const editUser = (payload) => {
  console.log(payload,'<<<<<< ini payload')
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + `/users/${payload.id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(payload)
      });

      await response.json();
      dispatch(getUsers());

    } catch (error) {
      console.log(error);
    }
  };
};

export const updateUser = (payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseUrl + `/users/${payload.id}`, {
        method: "PATCH",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      dispatch(getUsers());

    } catch (error) {
      console.log(error);
    }
  };
};