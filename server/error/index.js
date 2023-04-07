const BadRequest = require('./badRequest');
const NotFound = require('./notFound');
const Forbidden = require('./forbidden');
const Unauthorized = require('./unauthorized');
const InternalServer = require('./internalServer');

module.exports = {
    BadRequest,
    NotFound,
    Forbidden,
    Unauthorized,
    InternalServer
}