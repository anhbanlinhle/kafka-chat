import KafkaConfig from "../../configs/connectMQ"

let postMsgToKafka = async (req, res) => {
  try {
    let { message, topic }  = req.body
    const kafkaConfig = new KafkaConfig(topic);
    const messages = [{value: message }];
    console.log(messages)
    await kafkaConfig.produce(topic, messages);

    return res.send({
      msg: "Message successfully send!",
    })
  } 
  catch (err) {
    console.log(err);
    return res.status(500).send(err)
  }
}

module.exports = {
  postMsgToKafka
}
