const jwt = require('jsonwebtoken');

const createToken =  ( payload ) => jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRATION
})

const isValidToken = (token) => jwt.verify(token, process.env.TOKEN_SECRET)

module.exports = {
    createToken,
    isValidToken
}