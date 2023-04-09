const express = require('express');
const router = express.Router();

const isLoggedIn = require('../utils/isLoggedIn')
const bookingController = require('../controllers/bookingController');

router.post('/', isLoggedIn, bookingController.newBooking);
router.put('/getBookedSeats', bookingController.getBookedSeats);

module.exports = router;