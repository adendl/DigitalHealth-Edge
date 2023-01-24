const mqtt = require('mqtt');

const HOSTURL = process.env.HOSTURL;
const client = mqtt.connect(HOSTURL);

console.log("application starting....");

client.on('connect', () => {
    client.subscribe('vitals_topic', (err) => {
        if (!err) {
            console.log('Successfully subscribed to vitals_topic');
        }
    });
});

client.on('message', (topic, message) => {
    if (topic === 'vitals_topic') {
        const vitals = JSON.parse(message);
        console.log(vitals);
    }
});z