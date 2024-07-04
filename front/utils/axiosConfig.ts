import axios from "axios";

const apiBaseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const serverBaseURL = process.env.NEXT_PUBLIC_BACK_BASE_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const api = axios.create({
    baseURL: apiBaseURL,
});

export const server = axios.create({
    baseURL: serverBaseURL,
});

export function callAPIMethod(method, args)
{
    return api.get(`?method=${method}&api_key=${apiKey}&${args}&format=json`);
}