const { isValidToken } = require('./utilities');
const { Unauthorized } = require('../error')

const authenticated = async(req, res, next) => {
    try {
        const [ name, token ] = req.headers.authorization.split(' ');
        const decode = isValidToken(token);
        req.user = decode;
        next();
    } catch (error) {
        throw new Unauthorized('Authentication Invalid');
    }
}

module.exports = {
    authenticated
}