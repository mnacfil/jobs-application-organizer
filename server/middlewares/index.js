const errorHandler = require('./error-handler');
const notFoundPage = require('./not-found');
const { authenticate } = require('./authenticate')

module.exports = {
    errorHandler,
    notFoundPage,
    authenticate
}