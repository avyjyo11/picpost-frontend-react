import axios from "axios";
import api from "../constants/api.config";

export default axios.create({
  baseURL: api.API_URL,
  headers: {
    Authorization: `Bearer `,
  },
});
