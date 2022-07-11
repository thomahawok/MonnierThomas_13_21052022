import axios from 'axios'
import { URL_PROFILE } from '../config'

export async function userDatas() {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(URL_PROFILE)
      console.log(res.data)
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
