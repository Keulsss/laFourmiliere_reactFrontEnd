import http from "./httpService";

const apiEndPoint = "/auth"

export function register(user) {
  return http.post(apiEndPoint, {
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    password: user.password
  })
}