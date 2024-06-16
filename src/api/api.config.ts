import axios from "axios";

const config = axios.create({
  baseURL: "https://api.quotable.io",
});

export default config;
