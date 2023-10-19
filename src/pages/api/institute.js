import config from "./config";
export async function createInstitute(data) {
  try {
    const res = await config.post(`/create/institute`, data);
    return res;
  } catch (error) {
    console.error(error);
    if (error.response) {
      return error.response;
    } else {
      throw new Error("Error creating institute");
    }
  }
}

export async function listInstitutes(page) {
  try {
    const auth = localStorage.getItem("jwt");
    if (!auth) {
      throw new Error("No JWT token found");
    }
    const res = await config.get(`/institutes?page=${page}`, {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    });
    return res.data.institutes;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting institutes list");
  }
}

export async function deleteInstitute(data) {
  try {
    const res = await config.post(`/delete/institute`, data);
    return res;
  } catch (error) {
    console.error(error);
    if (error.response) {
      return error.response;
    } else {
      throw new Error("Error delete institute.");
    }
  }
}
