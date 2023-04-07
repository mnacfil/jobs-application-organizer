const {attachCookie, payload, responseTemplate} = require('../middlewares/utilities');
const userRepository = require('../repository/userRepository');

const register = async(req, res) => {
    const user = await userRepository.create(req.body);
    const payloadUser = payload(user);
    attachCookie({ res, payload: payloadUser});
    res.status(201).json(responseTemplate(
        'SUCCESS',
        'Successfully register the user',
        payloadUser
    ));

}
const login = async(req, res) => {
    res.json({msg: req.body});
}


module.exports = {
    register,
    login
}