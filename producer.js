const Bluebird = require('bluebird')
const kafka = require('kafka-node')

const {
  TOPIC,
  PRODUCER_CONFIG,
  KAFKA_HOST,
  PUBSUB_TOPIC,
  API_PORT,
  API_CON_TIMEOUT
} = require('./config');

const client = new kafka.KafkaClient({ kafkaHost: KAFKA_HOST });
const producer = new kafka.Producer(client, PRODUCER_CONFIG);


const produceMsg = Bluebird.promisify(producer.send.bind(producer));


produceMsg([
  {
    topic: TOPIC,
    messages: [
      JSON.stringify({
        messages: 'PLOP'
      })
    ],
    key: 'toto'
  }
]).then(data => {
  console.log(data)
})