import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://67518882d1983b9597b34252.mockapi.io",
});

export default apiClient;
