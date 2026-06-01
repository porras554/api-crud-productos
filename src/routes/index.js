const express = require('express');
const router = express.Router();
const { getHealth } = require('../controllers/healthController');

// GET /
router.get('/', (req, res) => {
  res.json({ ok: true, message: 'API Express funcionando' });
});

// GET /health
router.get('/health', getHealth);

module.exports = router;