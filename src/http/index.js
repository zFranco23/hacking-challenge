import queryString from "query-string";
import axios from "axios";

export const buildRoute = (route, params) => {
  const re = /(:[a-zA-Z1-9]+)\/?/gi;
  const groups = [...route.matchAll(re)].map((x) => x[1]);
  if (params.length !== groups.length)
    throw new Error(
      "The number of parameters does not match with the found groups.\n" +
        `\tGiven params (${params.length}): ${params.join(",")}\n` +
        `\tFound groups (${groups.length}): ${groups.join(",")}\n`
    );
  let r = route;
  groups.forEach((g, idx) => (r = r.replace(g, params[idx])));
  return r;
};

const defaultHeaders = {
  "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
};

const httpCreator = (method, route, options) => {
  try {
    let url = route;
    let queryParams = {};
    let data = undefined;
    let headers = defaultHeaders;

    if (options) {
      if (options.route) {
        url = options.route;
      }
      if (options.headers) {
        headers = { ...headers, ...options.headers };
      }
      if (options.params) {
        queryParams = options.params;
      }
      if (options.body) {
        data = options.body;
      }
    }

    if (Object.keys(queryParams).length > 0) {
      url = `${url}?${queryString.stringify(queryParams)}`;
    }

    const axiosConfig = {
      method,
      url,
      data,
      headers,
    };

    switch (method) {
      case "GET":
      case "POST":
      case "PUT":
      case "DELETE":
        return axios(axiosConfig);

      default:
        throw new Error("¡Method not implemented yet!");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCreator = (url) => (params, options) =>
  httpCreator("GET", url, { params, ...options });

export const postCreator = (url) => (body, options) =>
  httpCreator("POST", url, { body, ...options });

export const putCreator = (url) => (body, options) =>
  httpCreator("PUT", url, { body, ...options });

export const patchCreator = (url) => (body, options) =>
  httpCreator("PATCH", url, { body, ...options });

export const deleteCreator = (url) => (body, options) =>
  httpCreator("DELETE", url, { body, ...options });
