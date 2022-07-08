import axios from 'axios'
import { URL_LOGIN } from '../config'

export async function userLogin(credientials) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(URL_LOGIN, credientials)
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + res.data.body.token
      console.log(res)
      resolve(res.data)
      if (res.data.status === 200) {
        sessionStorage.setItem('token', res.data.body.token)
      }
    } catch (error) {
      console.log(error)
      console.log(error.response.data.message)
      reject(error)
    }
  })
}
