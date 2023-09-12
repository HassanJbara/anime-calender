import axios from "axios";

export const axiosAPI = axios.create({
  withCredentials: false,
  timeout: 28000,
  baseURL: import.meta.env.VITE_BACKEND_URL,
});
