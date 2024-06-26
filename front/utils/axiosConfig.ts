import axios from "axios";

const apiBaseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const serverBaseURL = process.env.NEXT_PUBLIC_BACK_BASE_URL;

export const api = axios.create({
  baseURL: apiBaseURL,
});

export const server = axios.create({
  baseURL: serverBaseURL,
});
