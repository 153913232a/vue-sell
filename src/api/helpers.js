import axios from 'axios'
const ERR_OK = 0

export function get (url, params) {
  return function (params) {
    return axios.get(url, { // 返回一个promise对象
      params
    }).then(res => {
      const { errno, data } = res.data
      if (errno === ERR_OK) {
        return data
      }
    }).catch(() => {})
  }
}
