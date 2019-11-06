const Bluebird = require('bluebird')
const kafka = require('kafka-node')

const {
  TOPIC,
  KAFKA_HOST,
} = require('./config');

const client = new kafka.KafkaClient({ kafkaHost: KAFKA_HOST });
const consumer = new kafka.Consumer(
  client,
  [{ topic: TOPIC }]
);


consumer.on('message', function (message) {
  console.log(message);
});