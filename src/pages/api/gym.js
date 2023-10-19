import config from "./config";

export async function createGym(data) {
  try {
    const res = await config.post(`/create/gym`, data);
    return res;
  } catch (error) {
    console.error(error);
    if (error.response) {
      return error.response;
    } else {
      throw new Error("Error creating gym");
    }
  }
}

export async function deleteGym(data) {
  try {
    const res = await config.post(`/delete/gym`, data);
    return res;
  } catch (error) {
    console.error(error);
    if (error.response) {
      return error.response;
    } else {
      throw new Error("Error delete gym");
    }
  }
}

export async function listGyms(page) {
  try {
    const auth = localStorage.getItem("jwt");
    if (!auth) {
      throw new Error("No JWT token found");
    }
    const res = await config.get(`/gyms?page=${page}`, {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    });
    return res.data.gyms;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting gyms list");
  }
}

export async function findGym(id) {
  try {
    const res = await config.get(`/gym/${id}`);
    console.log(res);
    return res.data.gym;
  } catch (error) {
    console.log(error);
  }
}
