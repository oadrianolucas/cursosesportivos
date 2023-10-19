import config from "./config";
export async function login(data) {
  try {
    const res = await config.post(`/login`, data, {
      withCredentials: true,
    });
    if (!res.data || !res.data.auth) {
      throw new Error("JWT token not found in server response");
    }
    const jwtToken = res.data.auth;
    localStorage.setItem("jwt", jwtToken);
    return res;
  } catch (error) {
    console.error(error);
    if (error.response) {
      return error.response;
    } else {
      throw new Error("Error login in user");
    }
  }
}

export async function logout(data) {
  try {
    const res = await config.post(`/logout`, data, {
      withCredentials: true,
    });
    return console.log(res, "Logout realizado com sucesso");
  } catch (error) {
    console.error(error);
    if (error.response) {
      return error.response;
    } else {
      throw new Error("Error logout in user");
    }
  }
}
