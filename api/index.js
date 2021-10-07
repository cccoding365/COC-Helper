const axios = require('axios')
const { baseURL, token } = require('../config')

axios.defaults.baseURL = baseURL
axios.defaults.headers['authorization'] = token

/* 获取玩家信息 */
const getPlayerInfo = (playerTag) => {
  axios.get(`/players/%23${playerTag}`).then(res => {
    console.log(res.data);
  })
}
// getPlayerInfo('L8JGUU2RL')

/* 获取部落信息 */
const getClanInfo = (clanTag) => {
  axios.get(`/clans/%23${clanTag}`).then((res) => {
    console.log(res.data);
  })
}
getClanInfo('28CJ8CL2Q')

