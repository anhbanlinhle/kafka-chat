import { Kafka } from "kafkajs"

class KafkaConfig {
  constructor() {
    this.kafka = new Kafka({
      clientId: "stellaron",
      brokers: ["localhost:9091"],
    });
    this.producer = this.kafka.producer()
    this.consumer = this.kafka.consumer({ groupId: "blade" })
  }

  async produce(topic, messages) {
    try {
      await this.producer.connect()
      await this.producer.send({
        topic: topic,
        messages: messages,
      })
    } 
    catch (err) {
      console.error(err)
    } 
    finally {
      await this.producer.disconnect()
    }
  }

  async consume(topic, callback) {
    try {
      await this.consumer.connect()
      await this.consumer.subscribe({ 
        topic: topic, 
        fromBeginning: true 
      })
      
      await this.consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
          const value = message.value.toString()
          callback(value)
        },
      })
    } 
    catch (err) {
      console.error(err);
    }
  }
}

export default KafkaConfig;