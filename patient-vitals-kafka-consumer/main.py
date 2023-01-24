import json
from kafka import KafkaConsumer
import psycopg2

# Create a Kafka consumer
consumer = KafkaConsumer('vitals_topic',
                         bootstrap_servers='localhost:9092',
                         value_deserializer=lambda x: json.loads(x.decode('utf-8')))

# Connect to Postgres
conn = psycopg2.connect(
    host="hostname",
    port = 5432,
    user="user",
    password="password",
    database="database"
)

# Create cursor
cur = conn.cursor()

while True:
    messages = consumer.poll(1000) # poll for new messages every 1000ms
    for topic_partition, messages in messages.items():
        for message in messages:
            # Use the message value to insert a new row into the table
            cur.execute("INSERT INTO vitals_table (patient_id, timestamp, heart_rate, systolic, diastolic, rr_interval, p_wave, qrs_complex, t_wave, oxygen_saturation, mean_rr, sdnn, rmssd, ldl, hdl, triglycerides, total_cholesterol) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)", 
                       (message.value["patient_id"], message.value["timestamp"], message.value["heart_rate"], message.value["blood_pressure"]["systolic"], message.value["blood_pressure"]["diastolic"], message.value["ecg_reading"]["rr_interval"], message.value["ecg_reading"]["p_wave"], message.value["ecg_reading"]["qrs_complex"], message.value["ecg_reading"]["t_wave"], message.value["oxygen_saturation"], message.value["heart_rate_variability"]["mean_rr"], message.value["heart_rate_variability"]["sdnn"], message.value["heart_rate_variability"]["rmssd"], message.value["blood_chemistry"]["ldl"], message.value["blood_chemistry"]["hdl"], message.value["blood_chemistry"]["triglycerides"], message.value["blood_chemistry"]["total_cholesterol"]))
            conn.commit()

# Close cursor and connection
cur.close()
conn.close()