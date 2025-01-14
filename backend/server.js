const express = require('express');
const mongoose = require('mongoose');
const jobseekerRoutes = require('./routes/jobseeker');
const employerRoutes = require('./routes/employer');


const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/job-portal', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/api/jobseeker', jobseekerRoutes);
app.use('/api/employer', employerRoutes);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));