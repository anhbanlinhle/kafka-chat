import client from "../configs/connectDB"

const database = client.db('stellaron')

const chats = database.collection('chat')

module.exports = {
  chats
}