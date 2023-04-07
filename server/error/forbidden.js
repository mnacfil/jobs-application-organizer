const CustomError = require('./customError');
const { StatusCodes } = require('http-status-codes')

class Forbidden extends CustomError {
    constructor(message) {
        super(message)
        this.name = message
        this.status = StatusCodes.FORBIDDEN;
    }
}

module.exports = Forbidden