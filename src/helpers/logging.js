// loggingMiddleware.js
const loggingMiddleware = (req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next(); // Continue to the next middleware/route handler
};

module.exports = loggingMiddleware;
