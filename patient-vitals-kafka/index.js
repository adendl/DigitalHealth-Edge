const { Kafka } = require('kafkajs');

const HOSTURL = process.env.HOSTURL;
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: [HOSTURL],
});
const consumer = kafka.consumer({ groupId: 'test-group' });

const run = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: 'vitals'});
  
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const vitals = JSON.parse(message.value);
            console.log(vitals);
        },
    });
};
run().catch(console.error);