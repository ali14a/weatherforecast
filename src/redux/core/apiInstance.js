import { create } from 'apisauce'
import { SERVER_ADDRESS } from "../../config/env/ServerConfig";

const api = create({
  baseURL: SERVER_ADDRESS,
  timeout: 15000
})
export default api;