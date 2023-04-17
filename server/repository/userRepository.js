const User  = require('../models/User');
const { NotFound, Unauthorized, BadRequest } = require('../error');
const { isAuthorize } = require('../middlewares/utilities');
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

    findOne = (email) => {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await User.findOne({ email });
                console.log(user);
                if(!user) {
                    throw new BadRequest('Invalid Credential, email or password is incorrect')
                }
                resolve(user);
            } catch (error) {
                console.log(`find user repository error`);
                reject(error);
            }
        })
    }

    update = (userID, updatedUser) => {
        return new Promise( async (resolve, reject) => {
            try {
                const user = await User.findById({ _id: userID });
                if(!user) {
                    throw new NotFound('User not found.')
                }
                const isUserAuthorize = isAuthorize( userID, user._id );
                if(isUserAuthorize) {
                    const {firstName, lastName, location, email} = updatedUser;
                    user.firstName = firstName;
                    user.lastName = lastName;
                    user.location = location;
                    user.email = email;
                    await user.save();
                    resolve(user);
                } else {
                    throw new Unauthorized('Youre not authorize to perform this operation');
                }
            } catch (error) {
                console.log(`update user repository error`);
                reject(error);
            }
        })
    }
}

module.exports = new UserRepository();