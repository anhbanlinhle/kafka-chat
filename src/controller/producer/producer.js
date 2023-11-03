import KafkaConfig from "../../configs/connectMQ"

let postMsgToKafka = async (req, res) => {
  try {
    console.log(req.body);
    const message  = req.body.message
    
    const kafkaConfig = new KafkaConfig();
    const messages = [{ key: "key1", value: message }];
    kafkaConfig.produce("my-topic", messages);

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
