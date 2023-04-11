const { isDemoUser, getToken, isValidToken } = require('./utilities');
const { Unauthorized } = require('../error')
const demoUserChecker = (req, res, next) => {
    try {
        const token = getToken(req);
        const decode = isValidToken(token);
        const isDemoUserAcount = isDemoUser(decode.userID);
        if(isDemoUserAcount) {
            throw new Error('Oops!, Demo user is Unathorized to perform this operation');
        } else {
            next();
        }  
    } catch (error) {
        throw new Unauthorized('Oops!, Demo user is Unathorized to perform this operation');
    }
}

module.exports = demoUserChecker;