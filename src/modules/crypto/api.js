const express = require('express');
const router = express.Router();

// Define routes for the 'crypto' module
router.get('/', (req, res) => {
  const response = {
    module: 'crypto-api',
  };
  res.json(response);
});

module.exports = router;
