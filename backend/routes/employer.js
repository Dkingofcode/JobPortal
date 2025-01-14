const express = require('express');
const router = express.Router();
const Job = require('../models/Job');


router.post('/jobs', async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.status(201).send('Job posted');
    } catch (error) {
        res.status(500).send('Error posting job');
    }
});

module.exports = router;