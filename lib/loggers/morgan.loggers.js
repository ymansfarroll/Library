/**
 * Morgan format configuration.
 * @module lib/loggers/morgan.loggers
 * @public
 */

/**
 * Custom JSON morgan format.
 * @param {String} tokens Morgan tokens.
 * @param {Request} request Interface containing properties, methods and so on related to client-request.
 * @param {Response} response Interface containing properties, methods and so on related to server-response.
 * @returns {JSON}
 * @public
 */

export const jsonMorganFormat = (
  tokens,
  request,
  response, // it might be ( req, res ) for short.
) =>
  JSON.stringify({
    'remote-address': tokens['remote-addr'](request, response),
    'http-version': tokens['http-version'](request, response),
    method: tokens.method(request, response),
    url: tokens.url(request, response),
    'status-code': tokens.status(request, response),
  });

export default jsonMorganFormat;
