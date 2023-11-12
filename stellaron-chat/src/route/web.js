import express from 'express'
import homeController from '../controller/homeController'
import KafkaConfig from "../configs/connectMQ";
import io from "../server";
import unorm from "unorm";
import {Kafka} from "kafkajs";

let router = express.Router()
let i = 0;
const initWebRoute = (app) => {
  router.get('/', homeController.getHomePage)

  router.post('/api/selectTopic', async (req, res) => {
    let {topic} = req.body;
    topic = unorm.nfd(topic)
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/\s/g, '-')
        .replace(/đ/g, "d")
    const kafkaConfig = new KafkaConfig(topic);
    const messages = [{value: "Hello from Kafka!"}];
    await kafkaConfig.produce(topic, messages);
    await kafkaConfig.consume(topic, (value) => {
        io.emit('newMessage', {topic: topic, message: value});
    })

    return res.send({
      msg: "Message successfully send!",
    });
  });

  router.get('/test', homeController.firstRequest)

  router.post('/produce', homeController.postMsgToKafka)

  router.get('/consumer', homeController.consumeMsgFromKafka)

  return app.use('/', router)
}

export default initWebRoute