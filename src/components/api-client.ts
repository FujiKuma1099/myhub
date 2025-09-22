import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "76311227e0584e32a1ccd3b3eb00d889",
  },
});

export default apiClient;
