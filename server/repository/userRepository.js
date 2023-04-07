const User  = require('../models/User');

class UserRepository {

    // create user in database,
    create = (user) => {
        return new Promise( async (resolve, reject) => {
            try {
                resolve(await User.create(user));
            } catch (error) {
                console.log(`User repository error: ${error}`);
                reject(error);
            }
        })
    }

    // getUserByEmail 
    getUserByEmail = (email) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await User.findOne({ email }));
            } catch (error) {
                console.log(`get user repository error: ${error}`);
                reject(error);
            }
        })
    }

}

module.exports = new UserRepository();