from kafka import KafkaConsumer
from sklearn.externals import joblib
import json

# Set up Kafka consumer
consumer = KafkaConsumer(
    'vitals_topic',
    bootstrap_servers='localhost:9092',
    value_deserializer=lambda m: json.loads(m.decode('ascii'))
)

# Load the trained ML model
model = joblib.load('heart_model.pkl')

for message in consumer:
    vitals = message.value

    # Use the model to make a prediction
    prediction = model.predict([vitals])

    if prediction == 1:
        print(f'Dangerous change detected for patient {vitals["patient_id"]}')
    else:
        print(f'No dangerous change detected for patient {vitals["patient_id"]}')