import axios from "axios";

//const API_URL = "http://10.0.2.2:5001/api/auth";
const API_URL = "backend url"; 




export const registerUser = async (name, email, password) => {
  return axios.post(`${API_URL}/signup`, { name, email, password });
};

export const loginUser = async (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};
