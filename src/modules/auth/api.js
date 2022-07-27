import { getCreator } from "../../http";

const BASE_URL = process.env.REACT_APP_CAR_API_BASE_URL;

export const endpoints = Object.freeze({
  GET_USER: "https://jsonplaceholder.typicode.com/users",
  GET_CAR: `${BASE_URL}/cars`,
});

export const getUserApi = getCreator(endpoints.GET_USER);
export const getCarsApi = getCreator(endpoints.GET_CAR);
