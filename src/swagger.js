const swaggerJSDoc = require('swagger-jsdoc');
const defaultResponses = {
  200: {
    description: 'A successful response',
  },
  500: {
    description: 'Internal server error',
  },
};

const options = {
  failOnErrors: true,
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Documentation',
      version: '1.0.0',
      description: 'API documentation for your Node.js application',
    },
  },
  apis: ['./src/modules/**/*.js'],
};

const specs = swaggerJSDoc(options);

// Iterate over our paths and add the default responses
for (const path in specs.paths) {
  for (const method in specs.paths[path]) {
    const operation = specs.paths[path][method];
    if (operation.responses) {
      for (const statusCode in defaultResponses) {
        if (!operation.responses[statusCode]) {
          operation.responses[statusCode] = defaultResponses[statusCode];
        }
      }
    } else {
      operation.responses = { ...defaultResponses };
    }
  }
}
module.exports = specs;
