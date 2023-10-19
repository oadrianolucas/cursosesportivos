import config from "./config";
export async function createUser(data) {
  try {
    const res = await config.post(`/signup`, data);
    return res;
  } catch (error) {
    console.error(error);
    if (error.response) {
      return error.response;
    } else {
      throw new Error("Error creating user");
    }
  }
}

export async function listUsers(page) {
  try {
    const auth = localStorage.getItem("jwt");
    if (!auth) {
      throw new Error("No JWT token found");
    }
    const res = await config.get(`/users?page=${page}`, {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    });
    return res.data.users;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting users list");
  }
}

export async function allUsers() {
  try {
    const auth = localStorage.getItem("jwt");
    if (!auth) {
      throw new Error("No JWT token found");
    }
    const res = await config.get(`/total/users`, {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    });
    return res.data.users;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting user data");
  }
}

export async function alterFilter(data) {
  try {
    const res = await config.post(`/alter/filter/user`, data);
    console.log(data);
    return res;
  } catch (error) {
    console.error(error);
    throw new Error("Error while altering filter");
  }
}

export async function searchUsers(email) {
  try {
    const res = await config.get(`/search/users/${email}`);
    return res.data.users;
  } catch (error) {
    console.error(error);
    throw new Error("Error searching users");
  }
}

export async function findUser(id) {
  try {
    const res = await config.get(`/user/${id}`);
    console.log(res);
    return res.data.user;
  } catch (error) {
    console.log(error);
  }
}
