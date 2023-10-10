const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const template_path = path.join(__dirname, 'templates');
const loggingMiddleware = require('./helpers/logging');
app.use(loggingMiddleware); // Use the logging middleware for all routes
app.use(express.static(template_path));

app.get('/', (req, res) => {
  const response = {
    message: 'Hello, World!',
  };
  res.json(response);
});

// Function to dynamically load routes from a module
const loadModuleRoutes = (moduleName) => {
  const api = require(`./modules/${moduleName}/api`);
  const routes = require(`./modules/${moduleName}/routes`);
  app.use(`/api/${moduleName}`, api);
  app.use(`/${moduleName}`, routes);
};

// Dynamically load routes from all modules
const modulesPath = path.join(__dirname, 'modules');
const moduleFolders = fs
  .readdirSync(modulesPath, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

moduleFolders.forEach(loadModuleRoutes);

// Load Swagger
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger');
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs));

// Start application
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
