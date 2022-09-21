import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

const API = axios.create({
  baseURL: BASE_URL,
});

export default API;
