const express = require('express');
const app = express();

app.post('/vitals', (req, res) => {
    setInterval(() => {
        const patientData = {
            "patient_id": "123456",
            "timestamp": new Date().toISOString(),
            "heart_rate": Math.floor(Math.random() * 10) + 70,
            "blood_pressure": {
                "systolic": Math.floor(Math.random() * 10) + 110,
                "diastolic": Math.floor(Math.random() * 10) + 70
            },
            "ecg_reading": {
                "rr_interval": Math.floor(Math.random() * 100) + 700,
                "p_wave": (Math.random() * 0.1).toFixed(2),
                "qrs_complex": (Math.random() * 0.1).toFixed(2),
                "t_wave": (Math.random() * 0.1).toFixed(2)
            },
            "oxygen_saturation": Math.floor(Math.random() * 10) + 90,
            "heart_rate_variability": {
                "mean_rr": Math.floor(Math.random() * 100) + 700,
                "sdnn": Math.floor(Math.random() * 10) + 20,
                "rmssd": Math.floor(Math.random() * 10) + 30
            },
            "blood_chemistry": {
                "ldl": Math.floor(Math.random() * 30) + 100,
                "hdl": Math.floor(Math.random() * 30) + 10,
                "triglycerides": Math.floor(Math.random() * 50) + 100,
                "total_cholesterol": Math.floor(Math.random() * 100) + 200
            }
        };
        request.post({
            url: 'http://localhost:3000/vitals',
            json: patientData
        }, (error, response, body) => {
            if (error) {
                console.log(error);
            } else {
                console.log(response.statusCode, body);
            }
        });
    }, 100);
});

app.listen(3002, () => {
    console.log('Server listening on port 3002');
});