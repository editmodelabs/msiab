import axios from "axios";
const isBrowser = () => typeof window !== "undefined";

const api = axios.create({
  baseURL: "https://api2.editmode.com/",
  headers: {
    Accept: "application/json",
    referrer: isBrowser() ? window.location.href : "",
  },
});

export default api;
