import { URL_LOGIN } from '../config'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

/**
 * @description - This function is used to login a user
 * @param {string} email - The user email
 * @param {string} password - The user password
 * @returns {Promise<any>} - The promise with the user data
 * @throws {Error} - If the user is not found or the password is incorrect
 */

function authenticated(credientials) {
  return axios
    .post(URL_LOGIN, credientials)
    .then((res) => res.data)
    .then((data) => {
      window.localStorage.setItem('authToken', data.body.token)
      //window.localStorage.setItem('username', data.useur.useurname)
      //axios.defaults.headers.common['Authorization'] =  'Bearer ' + data.data.body.token
      //console.log(singInUser)
      console.log(data)
      console.log(axios.defaults.headers)
      console.log(isAuthenticated())
    })
}

function isAuthenticated() {
  const token = window.localStorage.getItem('authToken')
  console.log(token)
  if (token) {
    const { exp } = jwtDecode(token)
    console.log(exp)

    if (exp * 1000 > new Date().getTime()) {
      return true
    }
  }
  return false
}

const authAPI = {
  authenticated,
  isAuthenticated,
}
export default authAPI
