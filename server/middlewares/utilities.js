const jwt = require('jsonwebtoken');

const createToken =  ( payload ) => jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRATION
})

const isValidToken = (token) => jwt.verify(token, process.env.TOKEN_SECRET);

const payload = (user) => {
    const { firstName, lastName, email, _id, location} = user;
    return {
        name: `${firstName} ${lastName}`,
        email,
        userID: _id,
        location
    }
}

const responseTemplate = (status, message, data) => {
    return {
        status,
        message,
        data
    }
}

const isAuthorize = (owner, resourceOwner) => {
    if(owner === resourceOwner.toString()) return true;
    return false;
}
const isDemoUser = (userID) => {
    // the _id of demo user is '6433aa91555b863f79f93302'
    if(userID === '6433aa91555b863f79f93302') return true;
    return false;
}
const getToken = (req) => {
    const [ name, token ] = req.headers.authorization.split(' ');
    return token;
} 

module.exports = {
    createToken,
    isValidToken,
    payload,
    responseTemplate,
    isAuthorize,
    isDemoUser,
    getToken
}