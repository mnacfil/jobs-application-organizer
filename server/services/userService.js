const userRepository = require('../repository/userRepository');
const { NotFound } = require('../error')

class UserService {

    getUserByEmail = async (email) => {
        const user = await userRepository.getUserByEmail(email);
        if(!user) {
            throw new NotFound('No user found!');
        }
        return user;
    }
}

module.exports = new UserService();