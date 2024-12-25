const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');
require('dotenv').config();

let refreshTokens = [];

exports.signup = async (req, res) => {
  const { id, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({ id, password: hashedPassword });
    const accessToken = generateAccessToken({ id: user.id });
    const refreshToken = jwt.sign({ id: user.id }, process.env.REFRESH_TOKEN_SECRET);

    refreshTokens.push(refreshToken);
    res.json({ accessToken, refreshToken });
  } catch (err) {
    res.status(500).json({ message: 'User already exists' });
  }
};

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10m' });
}
