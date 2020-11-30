import http from "./httpService";
const apiEndPoint = "/api/v1/auth/sign_in";

export async function login(email, password) {
  return http.post(apiEndPoint, {
    email,
    password
  });
}