import { URL_LOGIN } from '../config'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

export async function authenticate(singInUser) {
  console.log(singInUser)
  console.log(URL_LOGIN)

  const response = await axios.post(URL_LOGIN, singInUser).then((data) => {
    //window.localStorage.setItem('authToken', data.data.body.token)
    axios.defaults.headers['Autorization'] = 'Bearer ' + data.data.body.token
    console.log(singInUser)
    console.log(data)
    console.log(isAuthenticatedFun())
  })

  return response
}

export function isAuthenticatedFun() {
  const token = window.localStorage.getItem('authToken')
  console.log(token)
  if (token) {
    const { exp } = jwtDecode(token)

    if (exp * 1000 > new Date().getTime()) {
      return true
    }
  }
  return false
}
