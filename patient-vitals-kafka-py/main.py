import os
from kafka import KafkaConsumer
from pymongo import MongoClient
import json

HOSTURL = os.environ["HOSTURL"]
DATABASE_URL = os.environ["DATABASE_URL"]

# Connect to Kafka consumer
consumer = KafkaConsumer('vitals', bootstrap_servers=HOSTURL)

# Connect to MongoDB
try:
    client = MongoClient(DATABASE_URL)
    db = client.vitals
    vitals_collection = db.get_collection('vitals')
except Exception as e:
    print(f"Error connecting to MongoDB: {e}")
    exit()

for msg in consumer:
    try:
        msg_value = json.loads(msg.value)
        vitals_collection.insert_one(msg_value)
        print("Inserted into MongoDB: ", msg_value)
    except Exception as e:
        print(f"Error inserting document into MongoDB: {e}")