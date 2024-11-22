import axios from "axios";

const apiUrl = "http://localhost:8002/api/";
const timeout = 50000;

const api = axios.create({
  baseURL: apiUrl,
  timeout: timeout,
});

// function getAuthHeader() {
//   const token = localStorage.getItem("token");
//   return token ? Bearer ${token} : null;
// }

export default {
  async makeGet(url, signal = null) {
    try {
      const response = await api.get(url, {
        // headers: {
        //   Authorization: getAuthHeader(),
        // },
        signal,
      });
      return response.data;
    } catch (error) {
      console.error("GET request failed:", error.message);
      return Promise.reject(error);
    }
  },
  async makePost(url, data = {}) {
    try {
      const response = await api.post(url, data, {
        // headers: {
        //   Authorization: getAuthHeader(),
        // },
      });
      return response.data;
    } catch (error) {
      console.error("POST request failed:", error.message);
      return Promise.reject(error);
    }
  },
  async makePut(url, data = {}) {
    try {
      const response = await api.put(url, data, {
        // headers: {
        //   Authorization: getAuthHeader(),
        // },
      });
      return response.data;
    } catch (error) {
      console.error("PUT request failed:", error.message);
      return Promise.reject(error);
    }
  },
  async makeDelete(url) {
    try {
      const response = await api.delete(url, {
        // headers: {
        //   Authorization: getAuthHeader(),
        // },
      });
      return response.data;
    } catch (error) {
      console.error("DELETE request failed:", error.message);
      return Promise.reject(error);
    }
  },
};