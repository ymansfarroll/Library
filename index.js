/**
 * Module dependencies.
 * @private
 */

import app from './lib/app.js';
import winstonLogger from './lib/loggers/winston.loggers.js';

import { SUCCESSFUL_APPLICATION_SET_UP } from './lib/helpers/app.constants.js';

app.listen(3000, () => winstonLogger.info(SUCCESSFUL_APPLICATION_SET_UP));
