/**
 * Database connection via sequelize configuration.
 * @module lib/database/sequelize
 */

/**
 * Module dependencies.
 * @private
 */

import { SEQUELIZE_CONNECTION_DIALECT } from '../helpers/app.constants.js';

const databaseConfigurations = {
  test: [
    process.env.DB_TEST_NAME,
    process.env.DB_TEST_USER,
    process.env.DB_TEST_PASSWORD,

    // Connection options.
    {
      host: process.env.DB_TEST_HOST,
      port: process.env.DB_TEST_PORT,
      dialect: SEQUELIZE_CONNECTION_DIALECT,
      logging: false, // Disable logging.
    },
  ],
};

const currentDatabaseConfiguration =
  databaseConfigurations[process.env.NODE_ENV || 'production'];

export default currentDatabaseConfiguration;
