// sequelize-cli.config.js
const path = require('path');

module.exports = {
  config: path.resolve('src', 'config', 'database.ts'),
  'models-path': path.resolve('src', 'models'),
  'seeders-path': path.resolve('src', 'seeders'),
  'migrations-path': path.resolve('src', 'migrations'),
};
