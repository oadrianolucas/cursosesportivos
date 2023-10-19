import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:3000/api/v1",
  headers: {},
});

export default instance;