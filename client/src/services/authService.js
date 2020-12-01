import http from "./httpService";
const apiEndPoint = "/api/v1/auth/sign_in";
const tokenKey = "user";

http.setJwt(getJwt());

export async function login(email, password) {
  const response = await http.post(apiEndPoint, {
    email,
    password
  })
  localStorage.setItem(tokenKey,
    JSON.stringify({
      'access-token': response.headers['access-token'],
      'client': response.headers['client'],
      'uid': response.data.data.uid,
      'id': response.data.data.id
    }))
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const user = localStorage.getItem(tokenKey);
    return user;

  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  localStorage.getItem(tokenKey)
}

export default {
  login,
  logout,
  getCurrentUser,
  getJwt
}