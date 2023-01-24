import json
import paho.mqtt.client as mqtt
import psycopg2

# create an MQTT client
client = mqtt.Client()

# Connect to MQTT broker
client.connect("localhost", 1883)

# subscribe to topic
client.subscribe("vitals_topic")

# Connect to Postgres
conn = psycopg2.connect(
    host="hostname",
    port = 5432,
    user="user",
    password="password",
    database="database"
)

def create_table(cur, conn):
    # Define the table structure
    table_query = """CREATE TABLE IF NOT EXISTS vitals_table
                    (patient_id text, 
                     timestamp timestamp, 
                     heart_rate integer, 
                     systolic integer, 
                     diastolic integer, 
                     rr_interval integer, 
                     p_wave double precision, 
                     qrs_complex double precision, 
                     t_wave double precision, 
                     oxygen_saturation integer, 
                     mean_rr integer, 
                     sdnn integer, 
                     rmssd integer, 
                     ldl integer, 
                     hdl integer, 
                     triglycerides integer, 
                     total_cholesterol integer);"""
    # Execute the query
    cur.execute(table_query)
    # Commit the changes
    conn.commit()
    # Close cursor


# Create cursor
cur = conn.cursor()

create_table(cur, conn)

# define the callback function
def on_message(client, userdata, message):
    # parse the JSON data
    data = json.loads(message.payload)
    # Use the message value to insert a new row into the table
    cur.execute("INSERT INTO vitals_table (patient_id, timestamp, heart_rate, systolic, diastolic, rr_interval, p_wave, qrs_complex, t_wave, oxygen_saturation, mean_rr, sdnn, rmssd, ldl, hdl, triglycerides, total_cholesterol) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)", 
               (data["patient_id"], data["timestamp"], data["heart_rate"], data["blood_pressure"]["systolic"], data["blood_pressure"]["diastolic"], data["ecg_reading"]["rr_interval"], data["ecg_reading"]["p_wave"], data["ecg_reading"]["qrs_complex"], data["ecg_reading"]["t_wave"], data["oxygen_saturation"], data["heart_rate_variability"]["mean_rr"], data["heart_rate_variability"]["sdnn"], data["heart_rate_variability"]["rmssd"], data["blood_chemistry"]["ldl"], data["blood_chemistry"]["hdl"], data["blood_chemistry"]["triglycerides"], data["blood_chemistry"]["total_cholesterol"]))
    conn.commit()

# set the callback function
client.on_message = on_message

# start the loop
client.loop_forever()

# Close cursor and connection
cur.close()
conn.close()





