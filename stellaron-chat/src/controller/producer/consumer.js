import KafkaConfig from "../../configs/connectMQ";

let consumeMsgFromKafka = async (req, res) => {
    try {
        const kafkaConfig = new KafkaConfig();
        const topic = req.query.topic;
        let messages = []
        await kafkaConfig.consume(topic, (value) => {
            messages.push(value)
        });
        res.send(messages);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}

module.exports = {
    consumeMsgFromKafka
}