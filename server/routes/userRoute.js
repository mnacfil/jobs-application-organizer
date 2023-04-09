const express = require('express');
const router = express.Router();
const {authenticate} = require('../middlewares/authenticate')
const { register, login, updateUser } = require('../controllers/userController');

// register
router.post('/register', register);
// login
router.post('/login', login);
// updating user
router.patch('/update', authenticate, updateUser);

module.exports = router;