const {attachCookie, payload, responseTemplate} = require('../middlewares/utilities');
const userRepository = require('../repository/userRepository');
const userService = require('../services/userService')
const { BadRequest, Unauthorized } = require('../error')

const register = async(req, res) => {
    const user = await userRepository.create(req.body);
    const payloadUser = payload(user);
    attachCookie({ res, payload: payloadUser});
    res.
        status(201).
        json(responseTemplate(
            'SUCCESS',
            'Successfully register the user',
            payloadUser
        ));

}
const login = async(req, res) => {
    const { email, password } = req.body;
    if(!email || !password) {
        throw new BadRequest('Please fill out all field');
    }
    const user = await userService.getUserByEmail(email);
    const isPasswordMatch = await user.isPasswordMatch(password);
    if(!isPasswordMatch) {
        throw new BadRequest('Password is incorrect!');
    }
    const payloadUser = payload(user);
    attachCookie({ res, payload: payloadUser});
    res.
    status(200).
    json(responseTemplate(
        'SUCCESS',
        'Successfully login the user',
        payloadUser
    ));
}


module.exports = {
    register,
    login
}