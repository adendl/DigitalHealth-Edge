const { Kafka } = require('kafkajs');
const { Client } = require('pg');

const HOSTURL = process.env.HOSTURL;
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: [HOSTURL],
});
const consumer = kafka.consumer({ groupId: 'test-group' });

console.log(process.env.DATABASE_URL)

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

const run = async () => {
    await client.connect();

    // Create the vitals table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS vitals (
        id SERIAL PRIMARY KEY,
        patient_id VARCHAR(255) NOT NULL,
        timestamp TIMESTAMP NOT NULL,
        heart_rate INTEGER NOT NULL,
        systolic INTEGER NOT NULL,
        diastolic INTEGER NOT NULL,
        rr_interval INTEGER NOT NULL,
        p_wave VARCHAR(255) NOT NULL,
        qrs_complex VARCHAR(255) NOT NULL,
        t_wave VARCHAR(255) NOT NULL,
        oxygen_saturation INTEGER NOT NULL,
        mean_rr INTEGER NOT NULL,
        sdnn INTEGER NOT NULL,
        rmssd INTEGER NOT NULL,
        ldl INTEGER NOT NULL,
        hdl INTEGER NOT NULL,
        triglycerides INTEGER NOT NULL,
        total_cholesterol INTEGER NOT NULL
      );
    `);

    await consumer.connect();
    await consumer.subscribe({ topic: 'vitals'});
  
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const vitals = JSON.parse(message.value);
            console.log(vitals);
            const query = `INSERT INTO vitals (patient_id, timestamp, heart_rate, systolic, diastolic, rr_interval, p_wave, qrs_complex, t_wave, oxygen_saturation, mean_rr, sdnn, rmssd, ldl, hdl, triglycerides, total_cholesterol) VALUES ('${vitals.patient_id}', '${vitals.timestamp}', ${vitals.heart_rate}, ${vitals.blood_pressure.systolic}, ${vitals.blood_pressure.diastolic}, ${vitals.ecg_reading.rr_interval}, '${vitals.ecg_reading.p_wave}', '${vitals.ecg_reading.qrs_complex}', '${vitals.ecg_reading.t_wave}', ${vitals.oxygen_saturation}, ${vitals.heart_rate_variability.mean_rr}, ${vitals.heart_rate_variability.sdnn}, ${vitals.heart_rate_variability.rmssd}, ${vitals.blood_chemistry.ldl}, ${vitals.blood_chemistry.hdl}, ${vitals.blood_chemistry.triglycerides}, ${vitals.blood_chemistry.total_cholesterol})`;
            await client.query(query);
        },
    });
    await client.end();
};
run().catch(console.error);