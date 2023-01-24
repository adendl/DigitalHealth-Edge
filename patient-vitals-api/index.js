const express = require('express');
const mqtt = require('mqtt');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// connect to the MQTT broker
const client = mqtt.connect('mqtt://localhost:1883');

app.post('/vitals', (req, res) => {
  const vitals = req.body;
  client.publish('vitals_topic', JSON.stringify(vitals));
  res.status(200).send({ message: 'Vitals sent to topic' });
});

app.listen(3000, () => {
  console.log('Microservice listening on port 3000!');
});