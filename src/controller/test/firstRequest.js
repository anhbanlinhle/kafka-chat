import { chats } from "../../database/collections"

let firstRequest = async (req, res) => {
  const query = { title: 'chat 1' }
  const chat = await chats.findOne(query)

  return res.send(chat)
}

module.exports = {
  firstRequest
}