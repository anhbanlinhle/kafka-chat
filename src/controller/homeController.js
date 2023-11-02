import { firstRequest } from './test/firstRequest'

let getHomePage = async (req, res) => {
  const msg = "server ok"
  return res.send({msg: msg})
}

module.exports = {
  getHomePage,
  firstRequest
}