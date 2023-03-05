import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = " https://api.supermomos-dev.com";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    toast.error("Something went wrong!", {
      duration: 5000,
    });
    console.log("Error bro");
    return Promise.reject(error);
  }
);
