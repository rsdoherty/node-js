const express = require('express');
const router = express.Router();

// Define routes for the 'bookshelf' module
router.get('/', (req, res) => {
  const response = {
    module: 'crypto-api'
  };
  res.json(response);
});


module.exports = router;
