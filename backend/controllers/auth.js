const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Assuming you have a User model defined
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');

const router = express.Router();

// Signup endpoint
exports.postSignup =  async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Create new user
        user = new User({
            username,
            email,
            password
        });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Save user to database
        await user.save();

        res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};



exports.postLogin = [
    // Validate input
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            // Check if user exists
            let user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ msg: 'Invalid credentials' });
            }

            // Check password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ msg: 'Invalid credentials' });
            }

            // Return jsonwebtoken
            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
];

// Logout endpoint
exports.postLogout = (req, res) => {
    // Invalidate the token (this can be done in various ways depending on your token management strategy)
    // For simplicity, we'll just send a success message
    res.json({ msg: 'User logged out successfully' });
};

// Reset Password endpoint
exports.postResetPassword = [
    // Validate input
    check('email', 'Please include a valid email').isEmail(),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email } = req.body;

        try {
            // Check if user exists
            let user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ msg: 'User not found' });
            }

            // Generate a reset token
            const resetToken = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            );

            // Here you would send the resetToken to the user's email
            // For simplicity, we'll just return it in the response
            res.json({ resetToken });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
];

// Update Password endpoint
exports.postUpdatePassword = [
    // Validate input
    check('resetToken', 'Reset token is required').exists(),
    check('newPassword', 'New password is required').isLength({ min: 6 }),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { resetToken, newPassword } = req.body;

        try {
            // Verify the reset token
            const decoded = jwt.verify(resetToken, config.get('jwtSecret'));
            const userId = decoded.userId;

            // Find the user by ID
            let user = await User.findById(userId);
            if (!user) {
                return res.status(400).json({ msg: 'Invalid token' });
            }

            // Hash the new password
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(newPassword, salt);

            // Save the updated user
            await user.save();

            res.json({ msg: 'Password updated successfully' });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
];

module.exports = router;



