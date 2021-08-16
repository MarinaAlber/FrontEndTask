import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export function get(url ,config) {
  
  return axiosInstance.get(url,config);
}
