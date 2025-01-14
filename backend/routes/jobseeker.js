const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/profile', async (req, res) => {
    try {
        const { userId, profile } = req.body;
        await User.findByIdAndUpdate(userId, { profile });
        res.status(200).send('Profile updated');
    } catch (error) {
        res.status(500).send('Error updating profile');
    }
});

module.exports = router;