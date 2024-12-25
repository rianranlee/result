const express = require('express');
const { signin, signup, refreshToken, info, logout } = require('../controllers/authController');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/signin', signin);
router.post('/signin/new_token', refreshToken);
router.post('/signup', signup);
router.get('/info', authMiddleware, info);
router.get('/logout', authMiddleware, logout);

module.exports = router;
