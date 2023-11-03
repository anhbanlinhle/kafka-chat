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
}

export default KafkaConfig;