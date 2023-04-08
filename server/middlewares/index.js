const errorHandler = require('./error-handler');
const notFoundPage = require('./not-found');
const { authenticated } = require('./authenticate')

module.exports = {
    errorHandler,
    notFoundPage,
    authenticated
}