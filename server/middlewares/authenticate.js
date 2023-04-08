const { isValidToken } = require('./utilities')

const authenticated = async(req, res, next) => {
    try {
        const [ name, token ] = req.headers.authorization.split(' ');
        const decode = isValidToken(token);
        req.user = decode;
        // setup code for expired token
        next();
    } catch (error) {
        console.log(error);
        next(error)
    }
}

module.exports = {
    authenticated
}