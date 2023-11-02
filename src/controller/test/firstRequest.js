import client from "../../configs/connectDB"

let firstRequest = async (req, res) => {
  const database = client.db('stellaron')
  const chats = database.collection('chat')

  const query = { title: 'chat 1' }
  const chat = await chats.findOne(query)

  return res.send(chat)
}

module.exports = {
  firstRequest
}