# Edge Health IoT Processing
This project demonstrates how Red Hat technology such as Microshift & AMQ Streams (Kafka) can be used on edge devices placed in hospitals or other clinical locations to process health IoT data closer to the source. Yes.....Kafka at the edge (as opposed to MQTT - but it works well!)

# Technologies Used
Application	Component
Red Hat Microshift for container orchestration and management
Patient Vitals Data Generator,	Node.js
Patient Vitals API - Kafka Producer,	Node.js + Express
Kafka Cluster,	Red Hat OpenShift Streams for Apache Kafka
Kafka Web UI,	Kafdrop
Kafka Consumer,	Python
Database,	MongoDB
Data Access API	Node.js, + Express
Data Visualisation Frontend,	React + Highcharts

![alt text](https://github.com/adendl/DigitalHealth-Edge/blob/main/images/app_architecture.png)


