const express = require('express');
const { Kafka } = require('kafkajs');
const bodyParser = require('body-parser');

const hostUrl = process.env.HOSTURL;
const app = express();
app.use(bodyParser.json());

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: [hostUrl],
});
const producer = kafka.producer();

app.post('/vitals', async (req, res) => {
  const vitals = req.body;
  try {
    await producer.connect();
    await producer.send({
        topic: 'vitals',
        messages: [{ value: JSON.stringify(vitals) }],
    });
    res.status(200).send({ message: vitals });
    console.log("message sent");
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
});

app.listen(3000, () => {
  console.log('Microservice listening on port 3000!');
});