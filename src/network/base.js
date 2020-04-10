import axios from "axios";
import { requestHandler, successHandler, errorHandler } from "./interceptors";

export const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // #BASE_URL
  params: {
    // api_key: "#API_KEY"
  }
});

// Handle request process
axiosInstance.interceptors.request.use(
  request => requestHandler(request)
);
// Handle response process
axiosInstance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
);