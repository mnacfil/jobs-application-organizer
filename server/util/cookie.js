const { createToken } = require('./token')

module.exports = ({res, payload}) => {
    const accessToken = createToken(payload);
    const threeDays = 1000 *60 * 60 * 24 * 3;
    
    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: true,
        signed: true,
        expires: new Date(Date.now() + threeDays)
    });
}
