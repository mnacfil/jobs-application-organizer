const {createToken, payload, responseTemplate} = require('../middlewares/utilities');
const userRepository = require('../repository/userRepository');
const UserService = require('../services/userService')
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
    const user = await UserService.findOne(email);
    const isPasswordMatch = await user.isPasswordMatch(password);
    if(!isPasswordMatch) {
        throw new BadRequest('Invalid Credential, email or password is incorrect');
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

const updateUser = async(req, res) => {
    const updatedUser = await UserService.update(req.user.userID, req.body);
    res.
        status(200).
        json(responseTemplate(
            'SUCCESS',
            'Successfully update the user',
            updatedUser
        ));
}


module.exports = {
    register,
    login,
    updateUser
}