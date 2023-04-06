const User = require('../models/User')
const { createToken, isValidToken } = require('../util/token')

const register = async(req, res) => {
    const { firstName, lastName, location, email, password } = req.body;
    const token = createToken({email, firstName, lastName});
    const user = await User.create(req.body)
    res.status(201).json({data: { user, token}})
}
const login = async(req, res) => {
    res.json({msg: req.body});
}


module.exports = {
    register,
    login
}