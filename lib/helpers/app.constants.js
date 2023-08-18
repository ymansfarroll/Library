/**
 * Application's constants.
 * @module lib/helpers/app.constants
 * @public
 */

export const // Database constants.

  SEQUELIZE_CONNECTION_DIALECT = 'postgres';

export const // Application constants.

  SUCCESSFUL_APPLICATION_SET_UP = 'Server listening on port ';

const topLevelAppConstants = {
  SEQUELIZE_CONNECTION_DIALECT,
  SUCCESSFUL_APPLICATION_SET_UP,
};

export default topLevelAppConstants;
