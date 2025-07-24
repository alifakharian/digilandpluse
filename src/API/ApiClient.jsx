import axios from "axios";

export const ApiClient = axios.create({
  baseURL: "https://67518882d1983b9597b34252.mockapi.io",
});

export const Usermanagement = axios.create({
  baseURL: "https://686bbdede559eba90873da5f.mockapi.io/user",
});

export default ApiClient;
