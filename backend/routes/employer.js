const express = require('express');
const router = express.Router();
const Job = require('../models/Job');


router.post('/job', async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.status(200).json(job);
    } catch (error) {
        res.status(500).send('Error posting job');
    }
});

module.exports = router;