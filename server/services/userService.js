const UserRepository = require('../repository/userRepository');
const { NotFound, BadRequest } = require('../error')

class UserService {

    findOne = async (email) => {
        try {
            return await UserRepository.findOne(email);
        } catch (error) {
            throw new BadRequest(error);
        }
    }
    update = async (userID, updatedUser) => {
        try {
            return await UserRepository.update(userID, updatedUser);
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = new UserService();