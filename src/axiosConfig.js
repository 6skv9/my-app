import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/"
});
// api.interceptors.request.use((config) => {
//     const token = localStorage.getItem("token");
//     if(token){
//         config.headers["Authorization"] = `Bearer ${token}`;
//         return config;
//     }
// })

export default api;
/*import axios from 'axios';
import { refreshAccessToken } from "./services/authServices"; 

const api = axios.create({baseURL: "http://localhost:8080/",
 
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshAccessToken();

        api.headers['Authorization'] = `Bearer ${newAccessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

        return api(originalRequest); 
      } catch (err) {
        console.error('Token refresh failed', err);
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;*/
