import axios from 'axios'
import { URL_PROFILE } from '../config'

export async function userUpDate(userFirstLastName) {
  console.log(userFirstLastName)
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.put(URL_PROFILE, userFirstLastName)

      console.log(res)

      resolve(res.data)
    } catch (error) {
      console.log(error)
      reject(error)
    }
  })
}
