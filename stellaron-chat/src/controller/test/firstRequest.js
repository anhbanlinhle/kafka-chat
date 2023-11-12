import { chats } from "../../database/collections"

let firstRequest = async (req, res) => {
  try {
    const query = { title: 'chat 1' }
    const chat = await chats.findOne(query)

    return res.send(chat)
  }
  catch (err) {
    return res.status(500).send(err)
  }
}

module.exports = {
  firstRequest
}