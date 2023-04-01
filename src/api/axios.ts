import axios from "axios";

export const axiosAPI = axios.create({
  withCredentials: false,
  timeout: 28000,
  baseURL: "https://roznami-admin.herokuapp.com/",
});