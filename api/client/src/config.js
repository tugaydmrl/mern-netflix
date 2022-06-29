import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://tugaydemirelmernnetflix.herokuapp.com/api",
});
