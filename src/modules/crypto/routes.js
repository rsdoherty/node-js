const express = require('express');
const router = express.Router();

// Define routes for the 'bookshelf' module
router.get('/', (req, res) => {
  res.sendFile(template_path, 'crypto', 'index.html');
});

module.exports = router;
