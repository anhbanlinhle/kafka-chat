import express from 'express'
import initWebRoute from './route/web.js'
import KafkaConfig from './configs/connectMQ'

require('dotenv').config()

const app = express()
const port = process.env.PORT || 1111
const kafkaConfig = new KafkaConfig()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

initWebRoute(app)

kafkaConfig.consume("my-topic", (value) => {
  console.log("📨 : ", value)
})

app.listen(port, () => {
  console.log(`\nApp running at: \n\t\thttp://localhost:${port}`)
})