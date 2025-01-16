const express = require('express');
const mongoose = require('mongoose');
const jobseekerRoutes = require('./routes/jobseeker');
const employerRoutes = require('./routes/employer');
const authRoutes = require('./routes/auth');
const cors = require('cors');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/job-portal', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// Enable CORS for all origins
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend's URL
    methods: 'GET,POST,PUT,DELETE,OPTIONS', // Allowed methods
    allowedHeaders: 'Content-Type,Authorization', // Allowed headers
}));

// Or simply:
// app.use(cors()); // Enables CORS for all origins (use this for development only)


app.use('/api/jobseeker', jobseekerRoutes);
app.use('/api/employer', employerRoutes);
app.use('/api', authRoutes);



app.listen(5000, () => console.log('Server running on http://localhost:5000'));