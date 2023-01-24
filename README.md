# Edge Health IoT Processing
This project demonstrates how Red Hat technology such as OpenShift, Red Hat Kafka, and Microshift can be used on edge devices placed in hospitals or other clinical locations to process health IoT data closer to the source, minimizing privacy concerns as the data itself doesn't need to leave the clinical location, only masked data which would be used to improve and train the AI/ML model in the cloud.

# Technologies Used
Red Hat OpenShift for container orchestration and management
Red Hat Kafka for real-time data streaming
Microshift for deploying microservices on edge devices
Node.js for the microservice that receives and processes the vitals data
Python for the application that consumes the data from Kafka topic and uses AI/ML model
Scikit-learn library for machine learning

![alt text](https://github.com/adendl/DigitalHealth-Edge/blob/main/images/Health%20AI%20Reference%20Architecture%20Diagram.png)


