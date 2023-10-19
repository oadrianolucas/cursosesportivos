import config from "./config";
export async function createModality(data) {
  try {
    const res = await config.post(`/create/modality`, data);
    return res;
  } catch (error) {
    console.error(error);
    if (error.response) {
      return error.response;
    } else {
      throw new Error("Error creating modality");
    }
  }
}

export async function listModalities(page) {
  try {
    const auth = localStorage.getItem("jwt");
    if (!auth) {
      throw new Error("No JWT token found");
    }
    const res = await config.get(`/modalities?page=${page}`, {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    });
    return res.data.modalities;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting modalities list");
  }
}
