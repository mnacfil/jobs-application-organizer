const CustomError = require('./customError');
const { StatusCodes } = require('http-status-codes')

class Unauthorized extends CustomError {
    constructor(message) {
        super(message)
        this.name = message
        this.status = StatusCodes.UNAUTHORIZED;
    }
}

module.exports = Unauthorized