const express = require('express');
const router = express.Router();
const Payment = require('../Model/PaymentSchema');

// GET all payments
router.get('/', async (req, res) => {
  try {
    const payments = await Payment.find(); // plain data
    res.json(payments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
