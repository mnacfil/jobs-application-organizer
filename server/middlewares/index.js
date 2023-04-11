const errorHandler = require('./error-handler');
const notFoundPage = require('./not-found');
const {authenticate} = require('./authenticate');
const demoUserChecker = require('./demoUserChecker')

module.exports = {
    errorHandler,
    notFoundPage,
    authenticate,
    demoUserChecker
}