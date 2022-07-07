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

export async function login(credientials) {
  try {
    const response = await axios.post(URL_LOGIN, credientials)
    axios.defaults.headers.common['Authorization'] =
      'Bearer ' + response.data.body.token
    const { token } = response.data.body
    localStorage.setItem('authToken', token)

    console.log(response)
    console.log(axios.defaults.headers.common)

    if (isAuthenticated()) {
      return true
    } else {
      return false
    }
  } catch (error) {
    throw new Error(error)
  }
}

function isAuthenticated() {
  const token = window.localStorage.getItem('authToken')
  //console.log(token)
  if (token) {
    const { exp } = jwtDecode(token)
    //console.log(exp)

    if (exp * 1000 > new Date().getTime()) {
      return true
    }
  }
  return false
}

const authAPI = {
  isAuthenticated,
}
export default authAPI
