import {Kafka} from "kafkajs"

require('dotenv').config()

class KafkaConfig {
    constructor(topic) {
        this.kafka = new Kafka({
            clientId: "stellaron",
            brokers: [process.env.KAFKA_HOST || "kafka:29092"],
        });
        this.producer = this.kafka.producer({allowAutoTopicCreation: true})
        this.consumer = this.kafka.consumer({groupId: topic, allowAutoTopicCreation: true})
    }

    // Cài đặt cho producer
    async produce(topic, messages) {
        try {
            const admin = this.kafka.admin()
            await admin.connect()
            const topicExists = await admin.listTopics()
            console.log(topicExists)
            if (!topicExists.includes(topic)) {
                await admin.createTopics({
                    topics: [{topic: topic}],
                })
            }
            await this.producer.connect()
            await this.producer.send({
                topic: topic,
                messages: messages,
            })
        } catch (err) {
            console.error(err)
        } finally {
            await this.producer.disconnect()
        }
    }

    async consume(topic, callback) {
        try {
            // Kết nối tới Kafka
            await this.consumer.connect()
            // Đăng ký nhận message từ topic
            await this.consumer.subscribe({
                topic: topic,
                fromBeginning: true
            })
            // Chạy consumer
            await this.consumer.run({
                // Số message tối đa mà consumer sẽ xử lý đồng thời
                partitionsConsumedConcurrently: 3,
                // Xử lý message nhận được
                eachMessage: async ({topic, partition, message}) => {
                    // Chuyển message từ dạng buffer sang string
                    const value = message.value.toString()
                    // Gọi callback function và truyền message nhận được vào
                    callback(value)
                },
            })
        } catch (err) {
            console.error(err);
        } finally {
            // Ngắt kết nối tới Kafka
            await this.consumer.disconnect()
        }
    }
}

export default KafkaConfig;