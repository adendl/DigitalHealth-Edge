const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const app = express();
/** Install Dependencies */
app.use(cors())

// Connection URL
const url = process.env.DATABASE_URL;
// Database Name
//const dbName = 'vitals';
// Create a new MongoClient
//const client = new MongoClient(url);

// Use connect method to connect to the server
//client.connect(function(err) {
  //console.log("Connected to MongoDB server");
  //const db = client.db(dbName);
  
  // Routes
  app.get("/data", (req, res) => {
    // Find all documents in the "vitals" collection
      result = [{
        "patient_id": "123456",
        "timestamp": "2023-02-14T23:14:35.277Z",
        "heart_rate": 72,
        "blood_pressure": {
           "systolic": 117,
           "diastolic": 79
        },
        "ecg_reading": {
           "rr_interval": 765,
           "p_wave": "0.03",
           "qrs_complex": "0.05",
           "t_wave": "0.06"
        },
        "oxygen_saturation": 92,
        "heart_rate_variability": {
           "mean_rr": 718,
           "sdnn": 26,
           "rmssd": 36
        },
        "blood_chemistry": {
           "ldl": 121,
           "hdl": 18,
           "triglycerides": 113,
           "total_cholesterol": 228
        }
     },
     {
      "patient_id": "123456",
      "timestamp": "2023-02-14T23:14:36.277Z",
      "heart_rate": 73,
      "blood_pressure": {
         "systolic": 117,
         "diastolic": 79
      },
      "ecg_reading": {
         "rr_interval": 765,
         "p_wave": "0.03",
         "qrs_complex": "0.05",
         "t_wave": "0.06"
      },
      "oxygen_saturation": 92,
      "heart_rate_variability": {
         "mean_rr": 718,
         "sdnn": 26,
         "rmssd": 36
      },
      "blood_chemistry": {
         "ldl": 121,
         "hdl": 18,
         "triglycerides": 113,
         "total_cholesterol": 228
      }
   },
   {
    "patient_id": "123456",
    "timestamp": "2023-02-14T23:14:37.277Z",
    "heart_rate": 73,
    "blood_pressure": {
       "systolic": 117,
       "diastolic": 79
    },
    "ecg_reading": {
       "rr_interval": 765,
       "p_wave": "0.03",
       "qrs_complex": "0.05",
       "t_wave": "0.06"
    },
    "oxygen_saturation": 92,
    "heart_rate_variability": {
       "mean_rr": 718,
       "sdnn": 26,
       "rmssd": 36
    },
    "blood_chemistry": {
       "ldl": 121,
       "hdl": 18,
       "triglycerides": 113,
       "total_cholesterol": 228
    }
 },{
  "patient_id": "123456",
  "timestamp": "2023-02-14T23:14:38.277Z",
  "heart_rate": 72,
  "blood_pressure": {
     "systolic": 117,
     "diastolic": 79
  },
  "ecg_reading": {
     "rr_interval": 765,
     "p_wave": "0.03",
     "qrs_complex": "0.05",
     "t_wave": "0.06"
  },
  "oxygen_saturation": 92,
  "heart_rate_variability": {
     "mean_rr": 718,
     "sdnn": 26,
     "rmssd": 36
  },
  "blood_chemistry": {
     "ldl": 121,
     "hdl": 18,
     "triglycerides": 113,
     "total_cholesterol": 228
  }
},
{
"patient_id": "123456",
"timestamp": "2023-02-14T23:14:39.277Z",
"heart_rate": 73,
"blood_pressure": {
   "systolic": 117,
   "diastolic": 79
},
"ecg_reading": {
   "rr_interval": 765,
   "p_wave": "0.03",
   "qrs_complex": "0.05",
   "t_wave": "0.06"
},
"oxygen_saturation": 92,
"heart_rate_variability": {
   "mean_rr": 718,
   "sdnn": 26,
   "rmssd": 36
},
"blood_chemistry": {
   "ldl": 121,
   "hdl": 18,
   "triglycerides": 113,
   "total_cholesterol": 228
}
},
{
"patient_id": "123456",
"timestamp": "2023-02-14T23:14:40.277Z",
"heart_rate": 73,
"blood_pressure": {
 "systolic": 117,
 "diastolic": 79
},
"ecg_reading": {
 "rr_interval": 765,
 "p_wave": "0.03",
 "qrs_complex": "0.05",
 "t_wave": "0.06"
},
"oxygen_saturation": 92,
"heart_rate_variability": {
 "mean_rr": 718,
 "sdnn": 26,
 "rmssd": 36
},
"blood_chemistry": {
 "ldl": 121,
 "hdl": 18,
 "triglycerides": 113,
 "total_cholesterol": 228
}
},{
  "patient_id": "123456",
  "timestamp": "2023-02-14T23:14:41.277Z",
  "heart_rate": 72,
  "blood_pressure": {
     "systolic": 117,
     "diastolic": 79
  },
  "ecg_reading": {
     "rr_interval": 765,
     "p_wave": "0.03",
     "qrs_complex": "0.05",
     "t_wave": "0.06"
  },
  "oxygen_saturation": 92,
  "heart_rate_variability": {
     "mean_rr": 718,
     "sdnn": 26,
     "rmssd": 36
  },
  "blood_chemistry": {
     "ldl": 121,
     "hdl": 18,
     "triglycerides": 113,
     "total_cholesterol": 228
  }
},
{
"patient_id": "123456",
"timestamp": "2023-02-14T23:14:42.277Z",
"heart_rate": 73,
"blood_pressure": {
   "systolic": 117,
   "diastolic": 79
},
"ecg_reading": {
   "rr_interval": 765,
   "p_wave": "0.03",
   "qrs_complex": "0.05",
   "t_wave": "0.06"
},
"oxygen_saturation": 92,
"heart_rate_variability": {
   "mean_rr": 718,
   "sdnn": 26,
   "rmssd": 36
},
"blood_chemistry": {
   "ldl": 121,
   "hdl": 18,
   "triglycerides": 113,
   "total_cholesterol": 228
}
},
{
"patient_id": "123456",
"timestamp": "2023-02-14T23:14:43.277Z",
"heart_rate": 73,
"blood_pressure": {
 "systolic": 117,
 "diastolic": 79
},
"ecg_reading": {
 "rr_interval": 765,
 "p_wave": "0.03",
 "qrs_complex": "0.05",
 "t_wave": "0.06"
},
"oxygen_saturation": 92,
"heart_rate_variability": {
 "mean_rr": 718,
 "sdnn": 26,
 "rmssd": 36
},
"blood_chemistry": {
 "ldl": 121,
 "hdl": 18,
 "triglycerides": 113,
 "total_cholesterol": 228
}
},{
"patient_id": "123456",
"timestamp": "2023-02-14T23:14:44.277Z",
"heart_rate": 72,
"blood_pressure": {
"systolic": 117,
"diastolic": 79
},
"ecg_reading": {
"rr_interval": 765,
"p_wave": "0.03",
"qrs_complex": "0.05",
"t_wave": "0.06"
},
"oxygen_saturation": 92,
"heart_rate_variability": {
"mean_rr": 718,
"sdnn": 26,
"rmssd": 36
},
"blood_chemistry": {
"ldl": 121,
"hdl": 18,
"triglycerides": 113,
"total_cholesterol": 228
}
},
{
"patient_id": "123456",
"timestamp": "2023-02-14T23:14:45.277Z",
"heart_rate": 73,
"blood_pressure": {
"systolic": 117,
"diastolic": 79
},
"ecg_reading": {
"rr_interval": 765,
"p_wave": "0.03",
"qrs_complex": "0.05",
"t_wave": "0.06"
},
"oxygen_saturation": 92,
"heart_rate_variability": {
"mean_rr": 718,
"sdnn": 26,
"rmssd": 36
},
"blood_chemistry": {
"ldl": 121,
"hdl": 18,
"triglycerides": 113,
"total_cholesterol": 228
}
},
{
"patient_id": "123456",
"timestamp": "2023-02-14T23:14:46.277Z",
"heart_rate": 73,
"blood_pressure": {
"systolic": 117,
"diastolic": 79
},
"ecg_reading": {
"rr_interval": 765,
"p_wave": "0.03",
"qrs_complex": "0.05",
"t_wave": "0.06"
},
"oxygen_saturation": 92,
"heart_rate_variability": {
"mean_rr": 718,
"sdnn": 26,
"rmssd": 36
},
"blood_chemistry": {
"ldl": 121,
"hdl": 18,
"triglycerides": 113,
"total_cholesterol": 228
}
}]
      res.json(result);
    });
// Start the server
app.listen(3005, () => {
  console.log("Server started on port 3005");
});