import http from "./httpService";
import {
  apiUrl
} from "../config.json";

const apiEndPoint = apiUrl + "/users"

export function register(user) {
  http.post(apiEndPoint, {
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    password: user.password
  })
}