import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

console.log(baseURL);

const api = axios.create({
  baseURL: baseURL,
});

export default api;
