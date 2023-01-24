import json
from kafka import KafkaConsumer

# Set up Kafka consumer
consumer = KafkaConsumer('vitals_topic', bootstrap_servers='localhost:9092')

# Open the local JSON file for appending
with open('vitals_information.json', 'a') as json_file:
    for message in consumer:
        # Deserialize the JSON data
        data = json.loads(message.value)
        
        # Print the data
        print(data)
        
        # Write the data to the local JSON file
        json.dump(data, json_file)
        json_file.write('\n')