const User = require('../models/User');
const jwt = require('jsonwebtoken');
const sendEmail = require('../utils/sendEmail');

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const verificationLink = `http://localhost:${process.env.PORT}/api/auth/verify/${token}`;
    await sendEmail(email, 'Verify Your Email', `Click here to verify: ${verificationLink}`);

    res.status(201).json({ message: 'User registered. Verify your email.' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);
    if (!user) throw new Error();

    user.isVerified = true;
    await user.save();
    res.json({ message: 'Email verified successfully.' });
  } catch (err) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};

module.exports = { signup, verifyEmail };
