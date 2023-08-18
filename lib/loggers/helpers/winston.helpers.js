/**
 * Winston's helpers.
 * @module lib/loggers/helpers/winston.helpers
 * @public
 */

/**
 * Module dependencies.
 * @private
 */

import { format } from 'winston';

/**
 * Custom winston logger format.
 * @param pipeline Winston pipeline values.
 * @returns
 * @public
 */

const winstonCustomFormat = format.printf((pipeline) => {
  const { timestamp, level, message, ...rest } = pipeline;

  return `${JSON.stringify({ timestamp, level, message, ...rest })}`; // Ensure the correct json order.
});

export default winstonCustomFormat;
