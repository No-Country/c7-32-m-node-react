import axios from "axios"

export const httpsRequest = async (method, url, data) => {
  return await axios({
    method: method,
    url: url,
    data: data
  })
}