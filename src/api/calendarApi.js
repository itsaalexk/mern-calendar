import axios from "axios";

const calendarApi = axios.create({
  baseURL: "https://backend-mern-calendar-production-fa1d.up.railway.app/api",
});

// Todo: configurar interceptores
calendarApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "x-token": localStorage.getItem("token"),
  };

  return config;
});

export default calendarApi;
