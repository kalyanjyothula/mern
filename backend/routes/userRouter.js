const express = require('express')
const router = express.Router()

const { registerUser, loginUser, getMe } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.route('/register').post(registerUser)
router.route('/loginUser').post(loginUser)
router.route('/me').get(protect, getMe)

module.exports = router;