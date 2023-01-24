const express = require('express');
const mqtt = require('mqtt');
const bodyParser = require('body-parser');

const hostUrl = process.env.HOSTURL

const app = express();
app.use(bodyParser.json());

// connect to the MQTT broker
const client = mqtt.connect(`${hostUrl}:1883`)
console.log(client)
console.log("Connected to the client");

app.post('/vitals', (req, res) => {
  const vitals = req.body;
  try {
  client.publish('vitals_topic', JSON.stringify(vitals));
  res.status(200).send({ message: vitals });
  } catch (err)
  {
    console.log(err);
    res.status(500).send({message: err});
  }
});

app.listen(3000, () => {
  console.log('Microservice listening on port 3000!');
});