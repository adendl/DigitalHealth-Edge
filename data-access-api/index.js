const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

const app = express();


app.use(cors())
// Connection URL
const url = process.env.DATABASE_URL;

// Database Name
const dbName = 'vitals';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the server
client.connect(function(err) {
  console.log("Connected to MongoDB server");
  const db = client.db(dbName);
  
  // Routes
  app.get("/data", (req, res) => {
    // Find all documents in the "vitals" collection
    db.collection("vitals").find({}).limit(50).toArray(function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });
});

// Start the server
app.listen(3005, () => {
  console.log("Server started on port 3005");
});