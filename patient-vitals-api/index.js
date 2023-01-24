const express = require('express');
const kafka = require('kafka-node');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const client = new kafka.KafkaClient({
  kafkaHost: 'localhost:9092'
});
const producer = new kafka.Producer(client);

app.post('/vitals', (req, res) => {
  const vitals = req.body;

  const payload = [{
    topic: 'vitals_topic',
    messages: JSON.stringify(vitals)
  }];

  res.status(200).send(payload);
 /* producer.send(payload, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
   }); */
});

app.listen(3000, () => {
  console.log('Microservice listening on port 3000!');
});