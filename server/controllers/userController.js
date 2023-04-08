const {createToken, payload, responseTemplate} = require('../middlewares/utilities');
const userRepository = require('../repository/userRepository');
const userService = require('../services/userService')
const { BadRequest, Unauthorized } = require('../error')

const register = async(req, res) => {
    const user = await userRepository.create(req.body);
    const payloadUser = payload(user);
    res.
        status(201).
        json(responseTemplate(
            'SUCCESS',
            'Successfully register the user',
            data = { payloadUser, token: createToken(payloadUser)}
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
    res.
    status(200).
    json(responseTemplate(
        'SUCCESS',
        'Successfully login the user',
        data = { payloadUser, token: createToken(payloadUser)}
    ));
}


module.exports = {
    register,
    login
}