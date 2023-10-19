import config from "./config";
export async function createPrograms(data) {
  try {
    const res = await config.post(`/create/program`, data);
    return res;
  } catch (error) {
    console.error(error);
    if (error.response) {
      return error.response;
    } else {
      throw new Error("Error creating program");
    }
  }
}

export async function listPrograms(page) {
  try {
    const auth = localStorage.getItem("jwt");
    if (!auth) {
      throw new Error("No JWT token found");
    }
    const res = await config.get(`/programs?page=${page}`, {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    });
    return res.data.programs;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting programs list");
  }
}
