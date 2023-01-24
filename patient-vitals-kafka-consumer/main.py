import json
from kafka import KafkaConsumer
from pymongo import MongoClient

# Create a Kafka consumer
consumer = KafkaConsumer('vitals_topic',
                         bootstrap_servers='localhost:9092',
                         value_deserializer=lambda x: json.loads(x.decode('utf-8')))

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['vitals_db']
collection = db['vitals_collection']

for message in consumer:
    # Insert the message value (the json data) as a new document in the collection
    collection.insert_one(message.value)