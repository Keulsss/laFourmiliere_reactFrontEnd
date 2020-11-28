import http from "./httpService";
const apiEndPoint = "/auth/sign_in"

export function login(email, password) {
  return http.post(apiEndPoint, {
    email,
    password
  }).then(response => {
    localStorage.setItem('user',
      JSON.stringify({
        'access-token': response.headers['access-token'],
        'client': response.headers['client'],
        'uid': response.data.data.uid
      }))
  })
}