import http from "./httpService"
const apiEndPoint = "/api/v1/auth"
const usersUrl = "/api/v1/users"

function userUrl(id) {
  return `${usersUrl}/${id}`
}

export async function register(user) {
  const response = await http.post(apiEndPoint, {
    email: user.email,
    password: user.password,
  })
  localStorage.setItem('user',
    JSON.stringify({
      'access-token': response.headers['access-token'],
      'client': response.headers['client'],
      'uid': response.data.data.uid,
      'id': response.data.data.id
    }))
}

export function getUser(id) {
  return http.get(userUrl(id))
}