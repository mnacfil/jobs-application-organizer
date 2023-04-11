const { isValidToken, getToken } = require('./utilities');
const { Unauthorized } = require('../error')

const authenticate = (req, res, next) => {
    try {
        const token = getToken(req);
        const decode = isValidToken(token);
        req.user = decode;
        next();
    } catch (error) {
        throw new Unauthorized('Authentication Invalid');
    }
}

module.exports = {
    authenticate
}