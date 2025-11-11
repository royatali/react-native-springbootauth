import axios from "axios";

const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

export const axiosPublic = axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
});
