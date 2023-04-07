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

const attachCookie = ({res, payload}) => {
    const accessToken = createToken(payload);
    const threeDays = 1000 *60 * 60 * 24 * 3;
    
    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: true,
        signed: true,
        expires: new Date(Date.now() + threeDays)
    });
}

const responseTemplate = (status, message, data) => {
    return {
        status,
        message,
        data
    }
}


module.exports = {
    createToken,
    isValidToken,
    payload,
    attachCookie,
    responseTemplate
}