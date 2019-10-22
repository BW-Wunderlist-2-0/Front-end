// aWA function
import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  // return an instance of axios
  // create function allows us to pass in a configuration object containing authorization header
  return axios.create({
    baseURL: "https://wunderlist-two.herokuapp.com/api/auth",
    headers: {
      Authorization: token
    }
  });
};
