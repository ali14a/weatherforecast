import { create } from 'apisauce'
import { SERVER_ADDRESS } from "../../config/env/ServerConfig";

const api = create({
  baseURL: SERVER_ADDRESS,
})
export default api;