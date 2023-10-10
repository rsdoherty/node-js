/**
 * @openapi
 * /api/crypto:
 *   get:
 *     summary: Retrieve the current price of Bitcoin in USD
 *     description: Retrieve the current price of Bitcoin in USD
 *     tags: [Crypto]
 */

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const response = {
    module: 'crypto-api',
  };
  res.json(response);
});

module.exports = router;
