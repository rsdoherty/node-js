const express = require('express');
const router = express.Router();
const path = require('path');
const template_path = path.join(__dirname, '../../templates/');

// Define routes for the 'bookshelf' module
router.get('/', (req, res) => {
  res.sendFile(template_path, 'index.html');
});

module.exports = router;
