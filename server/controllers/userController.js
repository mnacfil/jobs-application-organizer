const User = require('../models/User')
const { createToken, isValidToken } = require('../util/token')
const {attachCookie, payload} = require('../util');

const register = async(req, res) => {
    const { firstName, lastName, location, email, password } = req.body;
    const user = await User.create(req.body);
    const payloadUser = payload(user);
    attachCookie({ res, payload: payloadUser});
    res.status(201).json({data: { user: payloadUser}});
}
const login = async(req, res) => {
    res.json({msg: req.body});
}


module.exports = {
    register,
    login
}