import { firstRequest } from './test/firstRequest'
import { postMsgToKafka } from './producer/producer'

let getHomePage = async (req, res) => {
  const msg = "server ok"
  return res.send({msg: msg})
}

module.exports = {
  getHomePage,
  firstRequest,
  postMsgToKafka
}