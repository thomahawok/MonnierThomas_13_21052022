import axios from 'axios'
import { URL_LOGIN } from '../config'

export async function userLogin(credientials) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(URL_LOGIN, credientials)

      console.log(res)
      console.log(res.data.body.token)
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + res.data.body.token
      if (res.data.status === 200) {
        window.localStorage.setItem('token', res.data.body.token)
        //window.sessionStorage.setItem('token', res.data.body.token)
      }

      resolve(res.data)
    } catch (error) {
      reject(error)
    }
  })
}
