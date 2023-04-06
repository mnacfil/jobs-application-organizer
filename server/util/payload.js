module.exports = (user) => {
    const { firstName, lastName, email, _id, location} = user;
    return {
        name: `${firstName} ${lastName}`,
        email,
        userID: _id,
        location
    }
}